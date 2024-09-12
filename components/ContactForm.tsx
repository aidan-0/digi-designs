'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(event.currentTarget)
    const response = await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify({
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        message: formData.get('message'),
      }),
    })

    const result = await response.json()
    setIsSubmitting(false)

    if (response.ok) {
      toast({
        title: "Success",
        description: "Your message has been sent successfully!",
      })
      event.currentTarget.reset()

    } else {
      toast({
        title: "Error",
        description: result.error || "An error occurred. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 w-full p-12">
      <div className="space-y-2">
        <h4 className='text-2xl'>Contact Us</h4>
      </div>
      <div className="space-y-2">
        <Input id="name" name="name" placeholder='Name' required />
      </div>
      <div className="space-y-2">
        <Input id="email" name="email" type="email" placeholder='Email' required />
      </div>
      <div className="space-y-2">
        <Input id="phone" name="phone" type="tel" placeholder='Phone' />
      </div>
      <div className="space-y-2">
        <Textarea id="message" name="message" placeholder='Message or Request' required />
      </div>
      <Button type="submit" disabled={isSubmitting} className="cursor-pointer px-4 sm:px-5 py-2 font-semibold hover:bg-dd-light hover:text-dd-dark rounded-[6px] text-dd-light border-dd-dark dark:border-card border-2  bg-dd-dark dark:bg-foreground dark:text-dd-dark transition duration-200 text-lg hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)] dark:hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)]"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}