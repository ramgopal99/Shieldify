
"use client";

import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FaShieldAlt } from 'react-icons/fa';  // Add icons for better visuals

const categories = ['All', 'Viruses', 'Threats', 'Protection', 'Best Practices']

const blogPosts = [
  {
    title: 'The Rise of Ransomware: What You Need to Know',
    content: 'Ransomware attacks are increasing. Protect your data by: 1) Regularly backing up files, 2) Keeping software updated, 3) Using strong, unique passwords, 4) Being cautious with email attachments and links.',
    category: 'Threats',
    date: '2023-05-15',
    solutions: '1) Regular backups, 2) Software updates, 3) Strong passwords, 4) Caution with emails.',
  },
  {
    title: 'New Virus Alert: "CryptoStealer" Targeting Cryptocurrency Wallets',
    content: 'Protect your digital assets from "CryptoStealer" by: 1) Using hardware wallets, 2) Enabling two-factor authentication, 3) Avoiding suspicious links and downloads, 4) Regularly updating your wallet software.',
    category: 'Viruses',
    date: '2023-05-10',
    solutions: '1) Use hardware wallets, 2) Enable 2FA, 3) Avoid suspicious links, 4) Regularly update software.',
  },
  {
    title: '5 Essential Cybersecurity Practices for Remote Work',
    content: '1) Use a VPN, 2) Enable two-factor authentication, 3) Keep work and personal devices separate, 4) Use strong, unique passwords, 5) Regularly update software and operating systems.',
    category: 'Best Practices',
    date: '2023-05-05',
    solutions: '1) VPN, 2) Two-factor authentication, 3) Device separation, 4) Strong passwords.',
  },
  {
    title: 'The Growing Threat of AI-Powered Cyberattacks',
    content: 'Defend against AI cyberattacks by: 1) Implementing AI-powered security solutions, 2) Regularly updating security protocols, 3) Training employees on new threats, 4) Using behavioral analytics to detect anomalies.',
    category: 'Threats',
    date: '2023-04-30',
    solutions: '1) AI security, 2) Regular updates, 3) Employee training, 4) Behavioral analytics.',
  },
  {
    title: 'How to Recognize and Avoid Phishing Attacks',
    content: 'Stay safe from phishing: 1) Check sender email addresses carefully, 2) Be wary of urgent requests, 3) Don\'t click on suspicious links, 4) Use email filters, 5) Keep software and browsers updated.',
    category: 'Protection',
    date: '2023-04-25',
    solutions: '1) Check email, 2) Beware urgent requests, 3) Avoid links, 4) Use email filters.',
  },
  {
    title: 'The Importance of Regular Software Updates',
    content: 'Maintain digital defenses by: 1) Enabling automatic updates, 2) Regularly checking for manual updates, 3) Updating all devices and software, not just operating systems, 4) Backing up data before major updates.',
    category: 'Best Practices',
    date: '2023-04-20',
    solutions: '1) Enable auto-updates, 2) Check manually, 3) Update all devices, 4) Backup data.',
  },
]

export default function BlogGrid() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || post.content.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div>
      {/* Search and Filter Section */}
      <div className="mb-8 space-y-4">
        <Input
          type="search"
          placeholder="Search articles..."
          className="max-w-md"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Blog Grid Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post, index) => (
          <Card key={index} className="flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
            <CardHeader className="bg-gradient-to-r from-blue-500 to-green-500 p-4 rounded-t-lg">
              <CardTitle className="text-white text-lg font-semibold">{post.title}</CardTitle>
              <Badge variant="secondary" className="mt-2 bg-white text-blue-500 text-xs">
                {post.category}
              </Badge>
            </CardHeader>
            <CardContent className="flex flex-col p-4 flex-grow">
              <p className="text-xs text-muted-foreground mb-2">{post.date}</p>
              <p className="text-base text-light-dark dark:text-white mb-4 flex-grow">{post.content}</p>

              {/* Solution Section: Always at the bottom */}
              <div className="mt-auto bg-yellow-100 dark:bg-yellow-800 p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white flex items-center">
                  <FaShieldAlt className="mr-2 text-blue-600" /> How to Deal With It:
                </h3>
                <ul className="list-disc pl-5 text-sm text-gray-700 dark:text-white">
                  {post.solutions.split(', ').map((solution, idx) => (
                    <li key={idx}>{solution}</li>
                  ))}
                </ul>
              </div>
            </CardContent>

          </Card>
        ))}
      </div>
    </div>
  )
}
