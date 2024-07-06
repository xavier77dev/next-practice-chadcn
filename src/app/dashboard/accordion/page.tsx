import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import React from 'react'

const items = [
  {
    id: "item-1",
    question: "Is is accessible",
    answer: "Yes, It adheres to the WAI-ARIA design pattern."
  },
  {
    id: "item-2",
    question: "How do I get started?",
    answer: "You can start by reading the documentation"
  },
  {
    id: "item-3",
    question: "Can I use on multiple projects?",
    answer: "Yes, It's licensed under the MIT license"
  },

]


function Page() {
  return (
    <Accordion type="single" className="w-full">
      {
        items.map((item) => {
          return (
            <AccordionItem value={item.id} key={item.id}>
              <AccordionTrigger>{item.question}</AccordionTrigger>
              <AccordionContent>
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          )
        })
      }
    </Accordion>

  )
}

export default Page; 
