import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - UNIONE',
  description: 'Privacy Policy for Unione',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-24" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: 'var(--color-text-primary)' }}>
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none" style={{ color: 'var(--color-text-secondary)' }}>
          {/* Introduction */}
          <section className="mb-12">
            <p className="leading-relaxed mb-6">
              UnioneCore Inc. (&quot;Unione,&quot; &quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) provides this Privacy Policy to explain how we process personal information in connection with the Unione mobile application and related services (collectively, the &quot;Services&quot;). This Privacy Policy is designed to comply with general standards under global privacy regulations, including Google Play and Apple App Store policies. By using the Services, you are deemed to have agreed to this Privacy Policy.
            </p>
          </section>

          {/* 1. Information We Collect */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              1. Information We Collect
            </h2>

            <p className="leading-relaxed mb-4">
              Unione is a community-based social platform built on a non-custodial wallet structure and operates under a principle of minimizing personal data collection. We never collect or store private keys, secret recovery phrases, or any information that grants access to a user&apos;s digital wallet.
            </p>

            <p className="leading-relaxed mb-4">
              We collect personal information in the following ways:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li className="leading-relaxed">When you voluntarily provide information directly to us.</li>
              <li className="leading-relaxed">Through automated technologies when you visit or use our Site, social media, or communications.</li>
              <li className="leading-relaxed">From third-party sources such as service providers, analytics partners, and social media companies.</li>
            </ul>

            <p className="leading-relaxed mb-6">
              We may fully utilize information that is de-identified, aggregated, or otherwise non-identifiable. We may also combine data obtained from third-party sources.
            </p>

            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
              Information You Provide Directly
            </h3>
            <p className="leading-relaxed mb-3">Information we may collect from you includes:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li className="leading-relaxed"><strong>Contact and identification information:</strong> name, phone number, email address, username, etc.</li>
              <li className="leading-relaxed"><strong>User-generated content:</strong> chat messages, comments, likes/dislikes, artwork, graphics, and other content posted in chats, forums, and social features.</li>
              <li className="leading-relaxed"><strong>Social / community activity information:</strong> community participation logs, friend invites, posts, comments, and other engagement activities.</li>
              <li className="leading-relaxed"><strong>Feedback and correspondence:</strong> survey responses, participation in community research, reports of issues, customer support inquiries, and any communication exchanged with us.</li>
              <li className="leading-relaxed"><strong>Marketing preference information:</strong> your choices regarding promotional messages and details about how you interact with marketing content.</li>
            </ul>

            <p className="leading-relaxed">
              Providing the above information is optional, and you may continue to use the core Services even if you choose not to provide certain optional data.
            </p>
          </section>

          {/* 2. How We Use Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              2. How We Use Information
            </h2>

            <p className="leading-relaxed mb-3">We use collected data solely for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li className="leading-relaxed">Providing and maintaining the Services</li>
              <li className="leading-relaxed">Enabling and optimizing community/social features</li>
              <li className="leading-relaxed">Improving the Services and diagnosing issues</li>
              <li className="leading-relaxed">Preventing abuse and enhancing security</li>
              <li className="leading-relaxed">Responding to customer inquiries</li>
              <li className="leading-relaxed">Complying with legal obligations</li>
            </ul>

            <p className="leading-relaxed mb-3">We do not use personal information for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2">
              <li className="leading-relaxed">Targeted advertising</li>
              <li className="leading-relaxed">Selling personal information</li>
              <li className="leading-relaxed">Automated decision-making that produces legal effects</li>
              <li className="leading-relaxed">Offering financial products or inducing investments</li>
            </ul>
          </section>

          {/* 3. Sharing of Personal Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              3. Sharing of Personal Information
            </h2>

            <p className="leading-relaxed mb-6">
              The Company does not sell or arbitrarily share personal information with third parties. However, information may be shared in the following limited circumstances:
            </p>

            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
              3.1 Service Providers (Data Processing/Outsourcing)
            </h3>
            <p className="leading-relaxed mb-3">We may share information with trusted external service providers for:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li className="leading-relaxed">App analytics / crash analytics (e.g., Firebase)</li>
              <li className="leading-relaxed">Cloud infrastructure and hosting</li>
              <li className="leading-relaxed">Security monitoring</li>
              <li className="leading-relaxed">Customer support</li>
              <li className="leading-relaxed">Email delivery services</li>
              <li className="leading-relaxed">KYC / AML / CTF identity verification providers</li>
              <li className="leading-relaxed">Legal, financial, auditing, and insurance advisors</li>
            </ul>
            <p className="leading-relaxed mb-6">
              These service providers are prohibited from using the information for purposes beyond the contracted service.
            </p>

            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
              3.2 Legal Requirements
            </h3>
            <p className="leading-relaxed mb-6">
              Information may be disclosed when required by law, regulation, law enforcement, or court order, or when necessary to protect the rights or safety of the Company, our users, or others.
            </p>

            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
              3.3 Protection of Rights
            </h3>
            <p className="leading-relaxed mb-6">
              We may share information when necessary to protect the safety, rights, property, or security of users or the Company.
            </p>

            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
              3.4 Aggregated or De-identified Data
            </h3>
            <p className="leading-relaxed mb-6">
              We may share aggregated or de-identified data that cannot reasonably identify any individual.
            </p>

            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
              3.5 Business Transfers
            </h3>
            <p className="leading-relaxed mb-6">
              In the event of a merger, acquisition, restructuring, bankruptcy, or asset transfer, user information may be transferred to the new entity. In such cases, users will be notified, and the same level of data protection will be maintained.
            </p>

            <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
              3.6 With User Consent
            </h3>
            <p className="leading-relaxed">
              Information may be shared with specific third parties if the user explicitly agrees. In such cases, the third party&apos;s privacy policy will apply.
            </p>
          </section>

          {/* 4. Data Retention */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              4. Data Retention
            </h2>

            <p className="leading-relaxed mb-4">
              We retain personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li className="leading-relaxed"><strong>Account and profile data:</strong> until the user deletes their account</li>
              <li className="leading-relaxed"><strong>Community activity logs:</strong> retained as needed for service operation</li>
              <li className="leading-relaxed"><strong>Analytics and error logs:</strong> typically deleted within 30-180 days</li>
              <li className="leading-relaxed"><strong>Customer support records:</strong> retained until the inquiry is fully resolved</li>
            </ul>
          </section>

          {/* 5. Your Rights */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              5. Your Rights
            </h2>

            <p className="leading-relaxed mb-4">Users have the following rights regarding their personal information:</p>
            <ul className="list-disc list-inside space-y-2">
              <li className="leading-relaxed"><strong>Opt-out:</strong> Request to stop receiving marketing or promotional communications (non-marketing, service-essential notices will continue).</li>
              <li className="leading-relaxed"><strong>Access:</strong> Request details on how personal data is processed and access copies of the data.</li>
              <li className="leading-relaxed"><strong>Correction:</strong> Request updates or corrections to inaccurate or outdated information.</li>
              <li className="leading-relaxed"><strong>Deletion:</strong> Request deletion of personal information within legally permitted scope.</li>
              <li className="leading-relaxed"><strong>Transfer / Portability:</strong> Request a machine-readable copy of personal data or have it transferred to a designated third party.</li>
              <li className="leading-relaxed"><strong>Restriction:</strong> Request limitations on how personal data is processed.</li>
              <li className="leading-relaxed"><strong>Objection:</strong> Object to processing based on legitimate interests if the processing infringes on your rights.</li>
            </ul>
          </section>

          {/* 6. Security of Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              6. Security of Information
            </h2>

            <p className="leading-relaxed mb-4">
              We retain personal information only for the period necessary to fulfill the purposes described in this Privacy Policy, and additionally when required by law, to prevent fraud, resolve disputes, troubleshoot issues, support investigations, or comply with our Terms of Service.
            </p>

            <p className="leading-relaxed mb-3">To determine appropriate retention periods, we consider:</p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li className="leading-relaxed">The type and sensitivity of the personal information</li>
              <li className="leading-relaxed">Potential risks of unauthorized disclosure</li>
              <li className="leading-relaxed">The purposes of data processing and the availability of alternatives</li>
              <li className="leading-relaxed">Legal requirements</li>
            </ul>

            <p className="leading-relaxed mb-4">
              We may anonymize personal information so it can no longer be associated with you. Anonymized information may be stored and used indefinitely.
            </p>

            <p className="leading-relaxed mb-4">
              We implement industry-standard technical and administrative security measures. However, data transmission over the internet cannot be guaranteed to be completely secure. We are not responsible for interception, interruption, alteration, or loss of data during transmission.
            </p>

            <p className="leading-relaxed">
              Users are responsible for safeguarding their passwords, biometrics, user IDs, and other authentication credentials. If a security breach is suspected, we may temporarily suspend access to the Services without prior notice to protect users.
            </p>
          </section>

          {/* 7. Children */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              7. Children
            </h2>

            <p className="leading-relaxed mb-4">
              Our Services are not intended for children under 13, and we do not knowingly collect personal information from children under that age.
            </p>

            <p className="leading-relaxed mb-3">
              In accordance with COPPA and other applicable laws, if we discover that a child under 16 has provided personal information without verified parental consent, we will:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li className="leading-relaxed">Contact the child or the parent/legal guardian to inform them that the Service cannot be used.</li>
              <li className="leading-relaxed">Immediately delete the corresponding personal information.</li>
              <li className="leading-relaxed">Apply additional measures to prevent recurrence.</li>
            </ul>

            <p className="leading-relaxed">
              Parents or legal guardians may request deletion of their child&apos;s information at any time.
            </p>
          </section>

          {/* 8. International Data Transfers */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              8. International Data Transfers
            </h2>

            <p className="leading-relaxed mb-4">
              Your personal information may be transferred to, processed, and stored in the United States. U.S. data protection laws may differ from those in your country of residence.
            </p>

            <p className="leading-relaxed mb-4">
              By accessing or using the Services, you consent to the transfer of your personal information outside the EEA, including to the United States.
            </p>

            <p className="leading-relaxed mb-3">
              When transferring data to countries that are not recognized by the European Commission as providing adequate protection, we rely on:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li className="leading-relaxed">Standard Contractual Clauses (SCCs) approved by the European Commission</li>
              <li className="leading-relaxed">Other legally recognized data transfer mechanisms</li>
            </ul>

            <p className="leading-relaxed">
              You may contact us for more information regarding our data transfer safeguards.
            </p>
          </section>

          {/* 9. Third-Party Links and External Activities */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              9. Third-Party Links and External Activities
            </h2>

            <p className="leading-relaxed mb-4">
              Some courts, government authorities, partners, and third-party service providers we work with may be located outside the EU. In such cases, we utilize Standard Contractual Clauses or other legally approved measures to ensure adequate data protection.
            </p>

            <p className="leading-relaxed">
              Users may request details about specific transfer mechanisms at any time.
            </p>
          </section>

          {/* 10. Changes to This Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              10. Changes to This Privacy Policy
            </h2>

            <p className="leading-relaxed mb-4">
              We may revise this Privacy Policy due to changes in applicable laws, updates to our Services, or internal policy adjustments.
            </p>

            <p className="leading-relaxed mb-4">
              If changes are made, we will notify users at least 7 days in advance (or 30 days for material changes, such as updates to data collection practices, expanded use purposes, or sharing with new third parties).
            </p>

            <p className="leading-relaxed mb-4">
              When legally required, we may request additional consent for major updates.
            </p>

            <p className="leading-relaxed">
              The revised Privacy Policy becomes effective on the announced effective date, and continued use of the Services constitutes acceptance of the changes.
            </p>
          </section>

          {/* 11. Contact Information */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              11. Contact Information
            </h2>

            <p className="leading-relaxed mb-4">
              If you have questions regarding this Privacy Policy or data-related matters, please contact:
            </p>
            <ul className="list-none space-y-2">
              <li className="leading-relaxed"><strong>Email:</strong> uniofficial@unione.me</li>
              <li className="leading-relaxed"><strong>Company:</strong> UnioneCore Inc.</li>
              <li className="leading-relaxed"><strong>Website:</strong> https://unione.im</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  )
}
