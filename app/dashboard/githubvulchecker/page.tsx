"use client";

import React, { useState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, ShieldCheck, AlertTriangle, Github } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";

export default function CodeVulnerabilityChecker() {
  const [githubUrl, setGithubUrl] = useState("");
  interface Vulnerability {
    file: string;
    issues: string[];
  }

  const [vulnerabilities, setVulnerabilities] = useState<Vulnerability[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validateGithubUrl = (url: string) => {
    const githubUrlPattern = /^https:\/\/github\.com\/[\w-]+\/[\w-]+(\.git)?$/;
    return githubUrlPattern.test(url);
  };

  const checkVulnerabilities = async () => {
    if (!githubUrl.trim()) {
      setError("Please enter a GitHub repository URL.");
      return;
    }

    if (!validateGithubUrl(githubUrl.trim())) {
      setError("Invalid GitHub URL format. Please ensure it matches 'https://github.com/username/repository.git'.");
      return;
    }

    setLoading(true);
    setError("");
    setVulnerabilities([]);

    try {
      const response = await fetch('/api/vulnerability-check', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ githubUrl }),
      });

      if (!response.ok) {
        const data = await response.json();
        console.log(data);
        throw new Error(data.error || 'Failed to check vulnerabilities.');
      }

      const data = await response.json();
      console.log(data.vulnerabilities);

      // Ensure the data.vulnerabilities is an array
      if (Array.isArray(data.vulnerabilities)) {
        setVulnerabilities(data.vulnerabilities);
      } else {
        setVulnerabilities([]);

      }
    } catch (err) {
      setError("Failed to analyze repository. Please try again.");
      console.error("Error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 mb-2">
            GitHub Repository Scanner
          </h1>
          <p className="text-xl text-gray-400">
            Analyze your GitHub repository for potential security vulnerabilities.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-slate-800 rounded-lg shadow-lg p-6 border border-slate-700">
              <h2 className="text-2xl font-semibold mb-4 text-blue-300 flex items-center">
                <Github className="mr-2 h-6 w-6" />
                Repository URL
              </h2>
              <div className="flex gap-4">
                <Input
                  value={githubUrl}
                  onChange={(e) => setGithubUrl(e.target.value)}
                  placeholder="https://github.com/username/repository"
                  className="flex-1 bg-gray-900 border-gray-700 text-gray-300 placeholder-gray-500"
                />
                <Button
                  onClick={checkVulnerabilities}
                  disabled={loading}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-200 ease-in-out"
                >
                  {loading ? <Loader2 className="animate-spin h-5 w-5" /> : "Scan"}
                </Button>
              </div>
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertTriangle className="h-5 w-5" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Display fallback message when no vulnerabilities found */}
            {vulnerabilities.length === 0 && !loading && !error && (
              <div className="bg-slate-700 p-4 rounded-lg shadow-md">
                <h3 className="font-semibold text-green-300">No vulnerabilities detected.</h3>
                <p className="text-gray-400">You Are good to Go!!!!!!!</p>
              </div>
            )}

            {/* Display vulnerabilities */}
            {vulnerabilities.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-green-400">Vulnerabilities Found</h2>
                <div className="space-y-2">
                  {vulnerabilities.map((vuln, index) => (
                    <div key={index} className="bg-slate-700 p-4 rounded-lg shadow-md">
                      <h3 className="font-bold text-blue-300">File: {vuln.file}</h3>
                      <ul className="list-disc ml-6">
                        {vuln.issues.map((issue, issueIndex) => (
                          <li key={issueIndex} className="text-gray-300">{issue}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
