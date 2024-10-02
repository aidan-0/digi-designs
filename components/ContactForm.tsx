'use client'

import { useState, ChangeEvent } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/hooks/use-toast"

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    // console.log(formData)
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

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
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      })
    } else {
      toast({
        title: "Error",
        description: result.error || "An error occurred. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 w-full">
      <div className="space-y-2">
        <h4 className='hidden md:flex text-2xl'>Contact Us</h4>
      </div>
      <div className="space-y-2">
        <Input 
          id="name" 
          name="name" 
          placeholder='Name' 
          required 
          value={formData.name} 
          onChange={handleInputChange} 
        />
      </div>
      <div className="space-y-2">
        <Input 
          id="email" 
          name="email" 
          type="email" 
          placeholder='Email' 
          required 
          value={formData.email} 
          onChange={handleInputChange} 
        />
      </div>
      <div className="space-y-2">
        <Input 
          id="phone" 
          name="phone" 
          type="tel" 
          placeholder='Phone' 
          value={formData.phone} 
          onChange={handleInputChange} 
        />
      </div>
      <div className="space-y-2">
        <Textarea 
          id="message" 
          name="message" 
          placeholder='Message or Request' 
          required 
          value={formData.message} 
          onChange={handleInputChange} 
        />
      </div>
      <Button 
        type="submit" 
        disabled={isSubmitting} 
        className="w-full md:w-auto cursor-pointer px-4 sm:px-5 py-5 font-semibold hover:bg-dd-light hover:text-dd-dark rounded-[6px] text-dd-light border-dd-dark dark:border-card border-2  bg-dd-dark dark:bg-foreground dark:text-dd-dark transition duration-200 text-lg hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)] dark:hover:shadow-[1px_1px_rgba(78,158,221),2px_2px_rgba(78,158,221),3px_3px_rgba(78,158,221),4px_4px_rgba(78,158,221)]"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  )
}
