'use client';

import { AwaitedReactNode, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function EmailPwnedChecker() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<{ isPwned: boolean, message: string, details?: any }>({ isPwned: false, message: '' });

  const fakeData = [
    {
      email: 'john.doe1234@gmail.com',
      hash_password: true,
      password: 'JohnD*******',
      sha1: 'ee84ebcc06e9e637486c9993b84ddb59f17e3504',
      hash: 'Pbel0N9Zy3UlCelqK9z4hdObKIJEIS6j7sJq',
      sources: 'Dropbox.com'
    },
    {
      email: 'john.doe1234@gmail.com',
      hash_password: true,
      password: 'JohnD*******',
      sha1: 'ee84ebcc06e9e637486c9993b84ddb59f17e3504',
      hash: 'Pbel0N9Zy3UlCelqK9z4hdObKIJEIS6j7sJq',
      sources: 'LinkedIn.com'
    },
    {
      email: 'john.doe1234@gmail.com',
      hash_password: true,
      password: 'br4tl****',
      sha1: 'e4dbacf62176f769c324136ac724cac6d060a696',
      hash: 'SgQ0pCtlBfXm+0yqMaRWxPuGdJhsJT/3',
      sources: 'AdultFriendFinder'
    },
    {
      email: 'john.doe1234@gmail.com',
      hash_password: true,
      password: 'br4tl****',
      sha1: 'e4dbacf62176f769c324136ac724cac6d060a696',
      hash: 'SgQ0pCtlBfXm+0yqMaRWxPuGdJhsJT/3',
      sources: 'Wattpad.com'
    },
    {
      email: 'john.doe1234@gmail.com',
      hash_password: true,
      password: 'doe12***',
      sha1: '482be4d3329ade775929ec6fd7407c2579d7bdd2',
      hash: 'urLSxICT2fm9iMxsi2m7qf2bJd0yfX8=',
      sources: 'Mathway.com'
    }
  ];

  const checkEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setResult({ isPwned: false, message: '', details: undefined });

    // Simulate email check by matching with fake data
    const compromisedData = fakeData.filter(entry => entry.email === email);

    if (compromisedData.length > 0) {
      setResult({
        isPwned: true,
        message: 'Oh no! This email appears to have been compromised.',
        details: compromisedData,
      });
    } else {
      setResult({
        isPwned: false,
        message: "Good news! This email hasn't been found in any known data breaches.",
      });
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Email Security Check</h1>
            <p className="text-muted-foreground">
              Verify your email security status and get personalized recommendations
            </p>
          </div>

          <Tabs defaultValue="pwned-checker" className="w-full">
            <TabsList className="w-full grid grid-cols-2 mb-8">
              <TabsTrigger value="pwned-checker">Check Email</TabsTrigger>
              <TabsTrigger value="security-tips">Security Tips</TabsTrigger>
            </TabsList>

            <TabsContent value="pwned-checker">
              <div className="space-y-6">
                <form onSubmit={checkEmail} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full"
                  />
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isLoading}
                  >
                    {isLoading ? 'Checking...' : 'Check Email'}
                  </Button>
                </form>
                
                {result?.message && (
                  <div
                    className={`p-4 rounded-lg ${
                      result.isPwned 
                        ? 'bg-destructive/15 text-destructive' 
                        : 'bg-success/15 text-success'
                    }`}
                  >
                    {result.message}
                    {result.isPwned && result.details && (
                      <div className="mt-4 space-y-2">
                        <h3 className="font-semibold">Compromised Sources:</h3>
                        <ul className="space-y-1">
                          {result.details.map((item: { sources: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; password: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }, index: Key | null | undefined) => (
                            <li key={index}>
                              <strong>{item.sources}</strong> - Password: {item.password}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </TabsContent>

            <TabsContent value="security-tips">
              <div className="space-y-4">
                <ul className="space-y-3 text-muted-foreground">
                  <li>• Use a strong, unique password for your email account.</li>
                  <li>• Enable two-factor authentication (2FA) if available.</li>
                  <li>• Be cautious of phishing emails and suspicious attachments.</li>
                  <li>• Regularly update your email client and security software.</li>
                  <li>• Avoid using public Wi-Fi networks for accessing sensitive information.</li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  );
}
