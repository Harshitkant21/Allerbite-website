"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ContactUsSection() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen" id="FAQ">
        <p className="text-5xl font-semibold text-center text-neutral-100 dark:text-white mb-10">
        FAQ's
      </p>
      <Accordion type="single" collapsible className="w-3/4">
      <AccordionItem value="item-1">
            <AccordionTrigger className="text-white">How do I use Allerbite?</AccordionTrigger>
            <AccordionContent>
              Allerbite helps you track and manage your food allergies. Simply enter your food preferences, and the app will notify you if any of your selected items contain allergens.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-white">How can I report an issue with the app?</AccordionTrigger>
            <AccordionContent>
              You can report any issues directly emailing us at support@allerbite.com.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-white">Can I sync my Allerbite data across multiple devices?</AccordionTrigger>
            <AccordionContent>
              Yes! Your data is synced across all your devices when you log in with the same account.
            </AccordionContent>
          </AccordionItem>
          {/* Additional Relevant Questions */}
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-white">How do I add a new allergy to my profile?</AccordionTrigger>
            <AccordionContent>
              Every time you scan app will ask you to add the allergy or check previous allergies to your proceed.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-white">Is my personal data safe on Allerbite?</AccordionTrigger>
            <AccordionContent>
              Yes, we take your privacy seriously. Allerbite uses encryption and follows best practices to keep your personal data secure.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger className="text-white">How can I get support if I have a problem with the app?</AccordionTrigger>
            <AccordionContent>
              For support, you can contact our support team via email at support@allerbite.com.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger className="text-white">Does Allerbite have a web version?</AccordionTrigger>
            <AccordionContent>
              No, you can access Allerbite’s full functionality on our iOS app.
            </AccordionContent>
          </AccordionItem>
      </Accordion>
    </div>
  );
}
