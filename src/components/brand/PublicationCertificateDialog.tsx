"use client";

import { ShieldCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SiteButton } from "@/components/site/SiteButton";
import type { PublicationProfile } from "@/data/publications";

type PublicationCertificateDialogProps = {
  pub: PublicationProfile;
};

export function PublicationCertificateDialog({ pub }: PublicationCertificateDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <SiteButton variant="outline" size="md">
          <ShieldCheck className="h-4 w-4" aria-hidden />
          Certificate
        </SiteButton>
      </DialogTrigger>
      <DialogContent className="max-w-2xl gap-0 overflow-hidden p-0 sm:max-w-3xl">
        <DialogHeader className="border-b border-border px-6 py-5 pr-14 text-left">
          <DialogTitle>RNI Certificate — {pub.cardTitle}</DialogTitle>
          <DialogDescription>Registration No. {pub.registrationNumber}</DialogDescription>
        </DialogHeader>
        <div className="max-h-[75vh] overflow-y-auto bg-white p-4 sm:p-6">
          <img
            src={pub.certificateImage}
            alt={pub.certificateAlt}
            className="mx-auto w-full max-w-xl rounded-md"
            loading="lazy"
            decoding="async"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
