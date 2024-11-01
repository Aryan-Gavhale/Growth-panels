'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { 
  Inbox, 
  LayoutGrid, 
  Heart, 
  Users, 
  PenTool, 
  PlayCircle, 
  Settings,
  CreditCard,
  Youtube,
  LogOut
} from 'lucide-react'
import { cn } from "@/lib/utils"

export default function SettingsPage() {
  const [autoReward, setAutoReward] = useState(true)
  const [customerEmails, setCustomerEmails] = useState(true)
  const [adminEmails, setAdminEmails] = useState(true)
  const [sslEnabled, setSSLEnabled] = useState(true)

  return (
    <div className="flex min-h-screen bg-white overflow-hidden">
      {/* Left Sidebar */}
      <aside className="w-64 border-r border-gray-200 bg-white fixed top-0 left-0 h-full overflow-y-auto">
        <div className="flex items-center gap-2 px-6 py-4 border-b border-gray-200">
          <Image
            src="/placeholder.svg"
            alt="GrowthPanels"
            width={150}
            height={30}
            className="dark:invert"
          />
        </div>
        
        <nav className="p-4 space-y-8">
          <div>
            <p className="text-xs font-medium text-gray-500 mb-4">GROWTHPANEL</p>
            <div className="space-y-2">
              <Link href="/inbox" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-2 py-1.5 rounded-lg hover:bg-gray-100">
                <Inbox className="w-5 h-5" />
                <span>Inbox</span>
              </Link>
              <Link href="/panel" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-2 py-1.5 rounded-lg hover:bg-gray-100">
                <LayoutGrid className="w-5 h-5" />
                <span>Your GrowthPanel</span>
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-500 mb-4">YOUR CONTENT</p>
            <div className="space-y-2">
              <Link href="/testimonials" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-2 py-1.5 rounded-lg hover:bg-gray-100">
                <Heart className="w-5 h-5" />
                <span>Video Testimonials</span>
              </Link>
              <Link href="/ugc" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-2 py-1.5 rounded-lg hover:bg-gray-100">
                <Users className="w-5 h-5" />
                <span>UGC</span>
              </Link>
              <Link href="/blog" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-2 py-1.5 rounded-lg hover:bg-gray-100">
                <PenTool className="w-5 h-5" />
                <span>Blog/Case Studies</span>
              </Link>
              <Link href="/youtube" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-2 py-1.5 rounded-lg hover:bg-gray-100">
                <Youtube className="w-5 h-5" />
                <span>YouTube Reviews</span>
              </Link>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-gray-500 mb-4">ACCOUNT MANAGEMENT</p>
            <div className="space-y-2">
              <Link href="/billing" className="flex items-center gap-2 text-gray-600 hover:text-gray-900 px-2 py-1.5 rounded-lg hover:bg-gray-100">
                <CreditCard className="w-5 h-5" />
                <span>Billing</span>
              </Link>
              <Link href="/settings" className="flex items-center gap-2 bg-gray-100 text-gray-900 px-2 py-1.5 rounded-lg">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </Link>
            </div>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto ml-64">
        <div className="max-w-4xl mx-auto py-8 px-4">
          <h1 className="text-2xl font-semibold mb-8">Settings</h1>

          <div className="space-y-12">
            {/* Basic Information */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-1">Name</h3>
                <p className="text-sm text-gray-500 mb-2">Your name is used to identify you on the site.</p>
                <Input placeholder="Name" className="max-w-md" />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <p className="text-sm text-gray-500 mb-2">Your email address is used to log in and send you notifications.</p>
                <Input placeholder="Email" className="max-w-md" />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">Company Name</h3>
                <p className="text-sm text-gray-500 mb-2">Your company name is used to identify your business on the site and on your GrowthPanel.</p>
                <Input placeholder="Company Name" className="max-w-md" />
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">Domain</h3>
                <p className="text-sm text-gray-500 mb-2">The domain you are going to embed the GrowthPanel on.</p>
                <Input placeholder="Domain" className="max-w-md" />
              </div>
            </div>

            {/* Logo Settings */}
            <div>
              <h3 className="text-lg font-medium mb-1">Logo image</h3>
              <p className="text-sm text-gray-500 mb-4">The logo you want to use in emails sent to your customers from GrowthPanels.</p>
              <div className="mb-4">
                <Image
                  src="/placeholder.svg"
                  alt="GrowthPanels Logo"
                  width={200}
                  height={40}
                  className="border rounded-lg p-4"
                />
              </div>
              <div className="flex gap-4">
                <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white">Upload custom image</Button>
                <Button variant="outline" className="text-[#7C3AED] border-[#7C3AED] hover:bg-[#7C3AED] hover:text-white">Set to GrowthPanels Logo</Button>
              </div>
            </div>

            {/* Technical Settings */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-1">SSL Support</h3>
                <div className="flex items-center justify-between max-w-md">
                  <div>
                    <p className="text-sm text-gray-500">Whether or not your site uses SSL (https:// or a padlock in the browser).</p>
                  </div>
                  <Switch
                    checked={sslEnabled}
                    onCheckedChange={setSSLEnabled}
                    className="relative inline-flex h-6 w-10 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-gray-200 data-[state=checked]:bg-[#7C3AED]"
                  >
                    <span className="sr-only">Toggle</span>
                    <span className={`${sslEnabled ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 rounded-full bg-white transition-transform`} />
                  </Switch>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">Currency</h3>
                <p className="text-sm text-gray-500 mb-2">The currency you wish to use for your account.</p>
                <Select defaultValue="usd">
                  <SelectTrigger className="max-w-md">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">$ (USD)</SelectItem>
                    <SelectItem value="eur">€ (EUR)</SelectItem>
                    <SelectItem value="gbp">£ (GBP)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Integration Settings */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-1">Stripe</h3>
                <p className="text-sm text-gray-500 mb-4">Connect your Stripe account to credit customers for completing tasks and to track sales</p>
                <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white">Connect to Stripe</Button>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">AutoReward</h3>
                <p className="text-sm text-gray-500 mb-2">AutoReward allows you to automatically pay for tasks completed by customers that GrowthPanels can verify on your behalf.</p>
                <div className="flex items-center justify-between max-w-md">
                  <p className="text-sm">
                    AutoReward is {' '}
                    <span className="font-medium">{autoReward ? 'Enabled' : 'Disabled'}</span>
                  </p>
                  <Switch
                    checked={autoReward}
                    onCheckedChange={setAutoReward}
                    className="relative inline-flex h-6 w-10 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-gray-200 data-[state=checked]:bg-[#7C3AED]"
                  >
                    <span className="sr-only">Toggle AutoReward</span>
                    <span className={`${autoReward ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 rounded-full bg-white transition-transform`} />
                  </Switch>
                </div>
              </div>
            </div>

            {/* Notification Settings */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-1">Send emails to Customers on key events</h3>
                <p className="text-sm text-gray-500 mb-2">GrowthPanels can let your customers know when they have been rewarded for completing a task, when their tasks have been rejected and more.</p>
                <div className="flex items-center justify-between max-w-md">
                  <p className="text-sm ">
                    Send emails to Customers on key events is {' '}
                    <span className="font-medium">{customerEmails ? 'Enabled' : 'Disabled'}</span>
                  </p>
                  <Switch
                    checked={customerEmails}
                    onCheckedChange={setCustomerEmails}
                    className="relative inline-flex h-6 w-10 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-gray-200 data-[state=checked]:bg-[#7C3AED]"
                  >
                    <span className="sr-only">Toggle customer emails</span>
                    <span className={`${customerEmails ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 rounded-full bg-white transition-transform`} />
                  </Switch>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">Send emails to you on key events</h3>
                <p className="text-sm text-gray-500 mb-2">GrowthPanels can let you know when a customer has completed a task, when a sale has been completed and more.</p>
                <div className="flex items-center justify-between max-w-md">
                <p className="text-sm ">
                Send emails to you on key events is{' '}
                <span className="font-medium">{adminEmails ? 'Enabled' : 'Disabled'}</span>
                </p>

                  <Switch
                    checked={adminEmails}
                    onCheckedChange={setAdminEmails}
                    className="relative inline-flex h-6 w-10 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 bg-gray-200 data-[state=checked]:bg-[#7C3AED]"
                  >
                    <span className="sr-only">Toggle admin emails</span>
                    <span className={`${adminEmails ? "translate-x-6" : "translate-x-1"} inline-block h-4 w-4 rounded-full bg-white transition-transform`} />
                  </Switch>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4">
              <Button className="bg-[#7C3AED] hover:bg-[#6D28D9] text-white">Save changes</Button>
              <Button variant="outline" className="text-red-500 border-red-500 hover:bg-red-50">Delete account</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}