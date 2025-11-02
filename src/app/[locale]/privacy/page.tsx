import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy - UNIONE',
  description: 'Privacy Policy and Terms and Conditions for Unione',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen pt-32 pb-24" style={{ backgroundColor: 'var(--color-background-primary)' }}>
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8" style={{ color: 'var(--color-text-primary)' }}>
          Privacy Policy
        </h1>

        <div className="prose prose-lg max-w-none" style={{ color: 'var(--color-text-secondary)' }}>
          {/* Chapter 1: General Provisions */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              Chapter 1: General Provisions
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 1 (Purpose)
              </h3>
              <p className="leading-relaxed">
                These Terms and Conditions establish the rights and obligations between users of the electronic commerce-related services and other services (hereinafter referred to as the "Services") provided through the 'Unione' internet open market site operated by Unione Core Co., Ltd. (hereinafter referred to as the "Company"), a telecommunications sales intermediary, and the 'Unione' mobile application provided via mobile communication devices such as smartphones. Their purpose is to promote mutual development through the fulfillment of these rights and obligations.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 2 (Disclosure, Effectiveness, and Amendment of Terms)
              </h3>
              <p className="leading-relaxed">
                The Company shall post the contents of these Terms on the initial service screen or linked screen of "Unione" so that Members can review them.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 3 (Definition of Terms)
              </h3>
              <p className="mb-3 leading-relaxed">The definitions of terms used in these Terms are as follows:</p>
              <ol className="list-decimal list-inside space-y-2 mb-4">
                <li className="leading-relaxed">
                  <strong>Member:</strong> An individual or corporation that has provided personal information to the Company and completed membership registration, categorized as either a General Member or a Sales Member as follows:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>General Member (Buyer): An individual or corporation aged 14 or older who can use the purchasing services provided by the Company.</li>
                    <li>Sales Member (Seller): An individual or corporation aged 14 or older who can use both the purchasing and selling services provided by the Company.</li>
                  </ul>
                </li>
                <li className="leading-relaxed">
                  <strong>ID:</strong> A unique identifier created and assigned by the Company for member identification and service use.
                </li>
                <li className="leading-relaxed">
                  <strong>Password:</strong> A combination of letters and numbers set by the member themselves and registered with the Company to verify the member's identity and protect their rights, interests, and confidentiality.
                </li>
                <li className="leading-relaxed">
                  <strong>Administrator:</strong> A person selected by the Company to manage and ensure the smooth operation of the services provided by the Company.
                </li>
              </ol>
              <p className="mb-2 leading-relaxed">
                The meaning of terms in these Terms not defined in Paragraph 1 shall be determined according to general commercial practices.
              </p>
              <p className="leading-relaxed">
                All laws referenced in these Terms are laws of the Republic of Korea.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 4 (Types of Services)
              </h3>
              <p className="mb-3 leading-relaxed">The services provided by the Company are as follows:</p>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>E-Commerce Platform Development and Operation Services</li>
                <li>Advertising Execution and Promotion Services</li>
              </ul>
              <p className="leading-relaxed">
                The services provided by the Company under the preceding paragraph are intended to permit Members to use the cyber mall to trade goods, etc., or to facilitate mail-order sales. The Company assumes no responsibility whatsoever regarding products registered on Unione by individual selling Members (sellers).
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 5 (Disclaimer of Agency)
              </h3>
              <p className="leading-relaxed">
                The Company, acting as an intermediary for mail-order sales between buyers and sellers, bears only the responsibility for operating and managing the system to provide efficient services. It does not act as an agent for buyers or sellers in transactions involving goods or services. Members shall bear direct responsibility for transactions concluded between themselves and for the information they provide and register. However, the Company may bear obligations as a mail-order business operator only when it directly conducts mail-order sales to buyers as a seller.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 6 (Disclaimer of Warranties)
              </h3>
              <p className="leading-relaxed">
                The Company disclaims all warranties, express or implied, with respect to transactions between buyers and sellers conducted through the systems provided by the Company, including but not limited to: stability, legality, and non-infringement of third-party rights, the truthfulness or legality of information entered by buyers or sellers, or materials posted on URLs linked through such information. All risks and responsibilities related thereto shall be borne solely by the relevant member. However, this shall not apply where the Company is liable under applicable laws and regulations.
              </p>
            </div>
          </section>

          {/* Chapter 2: Service Agreement and Information Protection */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              Chapter 2: Service Agreement and Information Protection
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 7 (Establishment of the Purchase Service Use Agreement)
              </h3>
              <ol className="list-decimal list-inside space-y-3">
                <li className="leading-relaxed">
                  The Purchase Service Use Agreement (hereinafter referred to as the "Use Agreement") is established when the Company accepts the use application of a person wishing to use the purchase service provided by the Company. The Company shall post its expression of intent to accept use on the relevant service screen or notify it via email or other methods.
                </li>
                <li className="leading-relaxed">
                  A person wishing to use the purchase service shall agree to these Terms and Conditions and fill in the necessary details according to the membership application form prescribed by the Company.
                </li>
                <li className="leading-relaxed">
                  Membership registration is available to individuals aged 14 or older and business entities (including sole proprietors and corporations).
                </li>
                <li className="leading-relaxed">
                  Applications for use are processed in the order received, and membership registration is deemed established when the company's approval reaches the member.
                </li>
                <li className="leading-relaxed">
                  The company may refuse or defer approval of an application for use if any of the following circumstances occur:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>If a reapplication for use is made within two months of the date the service agreement was terminated by the company</li>
                    <li>When a member who has received measures such as suspension of membership status from the Company arbitrarily terminates the service agreement during the suspension period and applies for re-use</li>
                    <li>When there is insufficient capacity in the facilities or technical impediments exist</li>
                    <li>When it is confirmed that the application violates these Terms, is illegal, or constitutes improper use, or when the Company reasonably deems it necessary</li>
                  </ul>
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 8 (Modification and Protection of Personal Information)
              </h3>
              <ol className="list-decimal list-inside space-y-3">
                <li className="leading-relaxed">
                  The Member ID (a unique identifier created and assigned by the Company) cannot be modified.
                </li>
                <li className="leading-relaxed">
                  Notifications from the Company to a Member shall be deemed delivered upon reaching the e-mail address provided by the Member. Any damages arising from failure to check such notifications shall be borne solely by the Member, and the Company shall bear no responsibility whatsoever in this regard.
                </li>
                <li className="leading-relaxed">
                  The Company may not use information provided by members for purposes other than those agreed upon for operating the Company's services under the User Agreement. Should a new purpose arise or if the information is to be provided to a third party, the Company shall notify the member of the purpose and obtain consent at the time of use or provision. However, this shall not apply where otherwise stipulated by relevant laws and regulations.
                </li>
                <li className="leading-relaxed">
                  The Company shall not preselect consent boxes regarding the collection, use, or provision of personal information. Furthermore, the Company shall explicitly specify the services restricted when a user refuses consent for the collection, use, or provision of personal information. The Company shall not restrict or refuse service provision, such as membership registration, based on a user's refusal to consent to the collection, use, or provision of non-mandatory personal information required for purchasing services.
                </li>
                <li className="leading-relaxed">
                  To protect members' personal information, when the Company needs to provide a purchasing member's personal information to a third party, it shall obtain the purchasing member's consent by specifying the items of personal information provided at the time of actual subscription, the recipient, the recipient's purpose of use of the personal information, and the retention and use period. When entrusting personal information, the Company shall establish a "Privacy Policy" in accordance with relevant laws and regulations, designate a personal information protection officer, and post and operate it.
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 9 (Management of ID and Password)
              </h3>
              <ol className="list-decimal list-inside space-y-3">
                <li className="leading-relaxed">
                  The responsibility for managing the ID and password lies with the member. Under no circumstances may a member transfer or lend their ID or password to another person.
                </li>
                <li className="leading-relaxed">
                  Members and users shall bear responsibility for any loss or damage arising from the leakage, transfer, or lending of their ID or password, provided such loss or damage occurs through no fault of the Company.
                </li>
                <li className="leading-relaxed">
                  If a member becomes aware that their ID or password has been stolen or is being used without authorization by a third party, they must immediately notify the Company. The Company shall make its best efforts to handle such matters promptly.
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 10 (Termination of the Service Agreement)
              </h3>

              <h4 className="text-lg font-medium mb-2 mt-4" style={{ color: 'var(--color-text-primary)' }}>
                1. Member Termination
              </h4>
              <ol className="list-decimal list-inside space-y-3 mb-4">
                <li className="leading-relaxed">
                  A member may terminate the Service Agreement at any time by notifying the Company of their intention to terminate through the designated service screen. However, the member must take all necessary measures to complete all transactions at least 7 days prior to notifying the Company of their intention to terminate.
                </li>
                <li className="leading-relaxed">
                  The Member shall bear responsibility for any disadvantages arising from the Member's expression of intent within the period specified in the preceding paragraph. Upon termination of the Service Agreement, the Company may recover any additional benefits provided to the Member.
                </li>
                <li className="leading-relaxed">
                  After terminating the Service Agreement at the Member's request, if the Member wishes to resume use later, service resumption is only possible if the Member notifies the Company of their intent to resume use and the Company consents to it.
                </li>
              </ol>

              <h4 className="text-lg font-medium mb-2 mt-4" style={{ color: 'var(--color-text-primary)' }}>
                2. Company Termination
              </h4>
              <ol className="list-decimal list-inside space-y-3">
                <li className="leading-relaxed">
                  The Company may terminate the Service Agreement if any of the following reasons occur or are confirmed:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Infringing upon the rights, reputation, credit, or other legitimate interests of other members or third parties, or engaging in acts violating relevant laws, regulations, or public order and morals.</li>
                    <li>Engaging in or attempting acts that interfere with the smooth operation of the services provided by the Company.</li>
                    <li>Confirmation of the existence of grounds for refusal of consent as stipulated in Article 7, Paragraph 5.</li>
                    <li>Other acts by the member that violate these Terms and Conditions, or the occurrence of grounds for termination specified in these Terms and Conditions.</li>
                  </ul>
                </li>
                <li className="leading-relaxed">
                  In the event the Company terminates the agreement, it shall notify the member of its intent to terminate via email, stating the reasons for termination. The Service Agreement shall terminate upon the Company's intent to terminate reaching the member. However, in such cases, the Company may grant the member an opportunity to state their opinion regarding the reasons for termination beforehand.
                </li>
                <li className="leading-relaxed">
                  Even if the Company terminates the Service Agreement pursuant to this clause, these Terms shall continue to apply with respect to the completion of any sales contracts already concluded prior to termination.
                </li>
                <li className="leading-relaxed">
                  Upon termination of the Service Agreement as provided in this clause, the Company may recover any additional benefits provided to the Member.
                </li>
                <li className="leading-relaxed">
                  If the Service Agreement is terminated as stipulated in this clause, the Company may refuse to accept the Member's subsequent application for reinstatement.
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 11 (Service Period and Suspension)
              </h3>
              <ol className="list-decimal list-inside space-y-3">
                <li className="leading-relaxed">
                  The service period under these Terms shall be from the date of service application until the termination of the service agreement.
                </li>
                <li className="leading-relaxed">
                  The Company may temporarily suspend service provision due to reasons such as maintenance, inspection, replacement, or malfunction of computer or other information and communications equipment, or disruption of communications. In such cases, the Company shall notify users of the temporary suspension and its reason on the Unione initial screen.
                </li>
                <li className="leading-relaxed">
                  The Company may restrict or temporarily suspend service provision if it becomes impossible to provide the service due to force majeure, such as natural disasters or similar unforeseeable circumstances.
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 12 (Service Fees)
              </h3>
              <p className="leading-relaxed">
                The Company provides various services necessary for free electronic commerce between members and may charge usage fees (service fees) for such services in accordance with its internal policies.
              </p>
            </div>
          </section>

          {/* Chapter 3: Use of the Unione Purchase Service */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              Chapter 3: Use of the Unione Purchase Service
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 13 (Conclusion of Sales Contracts and Payment Settlement)
              </h3>
              <ol className="list-decimal list-inside space-y-3">
                <li className="leading-relaxed">
                  A sales contract for a product is concluded when a member expresses an offer to purchase in accordance with the seller's stated sales conditions, and the seller expresses acceptance of that offer.
                </li>
                <li className="leading-relaxed">
                  The company provides methods for members to settle the purchase price using cards or other means.
                </li>
                <li className="leading-relaxed">
                  The buyer shall bear full responsibility for any information entered regarding payment settlement and any liabilities or disadvantages arising from such information.
                </li>
                <li className="leading-relaxed">
                  If payment is not settled within a specified period after ordering a product, the Company may cancel the order without the member's consent.
                </li>
                <li className="leading-relaxed">
                  The Company shall enable buyers to review the details of their concluded sales contracts on the purchase history page and shall provide guidance on cancellation methods and procedures.
                </li>
                <li className="leading-relaxed">
                  The Company may verify whether the buyer possesses legitimate authorization for the payment method used to settle the purchase price. The Company may suspend the transaction until such verification is complete or cancel the transaction if verification is impossible.
                </li>
                <li className="leading-relaxed">
                  The Company shall pay the settlement amount to the seller within 21 business days starting from the day after the member pays for the product. However, the Company may withhold payment of the settlement amount if the buyer expresses intent to cancel, return, exchange, or request a refund before the settlement amount is paid.
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 14 (Delivery)
              </h3>
              <ol className="list-decimal list-inside space-y-3">
                <li className="leading-relaxed">
                  The delivery period refers to the time from the day following the confirmation of the buyer's deposit or payment to the completion of delivery.
                </li>
                <li className="leading-relaxed">
                  The Company shall instruct the seller to take necessary delivery measures within 3 business days after receiving the Company's confirmation notice regarding the buyer's deposit or payment.
                </li>
                <li className="leading-relaxed">
                  Periods affected by force majeure events, such as natural disasters, shall be excluded from the delivery period.
                </li>
                <li className="leading-relaxed">
                  Disputes arising between the Seller, Buyer, delivery company, financial institution, or other parties related to shipping shall be resolved between the parties involved. The Company shall bear no liability whatsoever.
                </li>
                <li className="leading-relaxed">
                  If the delivery status is delayed due to the buyer failing to confirm receipt after the seller's shipment confirmation, the company may send a request for confirmation within two weeks from the shipment confirmation date. If the buyer still fails to confirm receipt after the company's notification, the status may automatically change to delivery completed after three days. In such cases, if the actual buyer has not received the goods, they may file a non-receipt report.
                </li>
                <li className="leading-relaxed">
                  For electronic tickets granting rights such as service usage rights or tickets, delivery is deemed complete automatically when the purchaser pays for the product and it becomes available for use on Unione.
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 15 (Cancellation)
              </h3>
              <ol className="list-decimal list-inside space-y-3">
                <li className="leading-relaxed">
                  Members may cancel a purchase before the purchased item is shipped. If the item is already in transit, it will be processed according to the return procedure, not cancellation.
                </li>
                <li className="leading-relaxed">
                  After a member completes payment, if the order status is "Waiting for Shipping" or "Shipping Request," cancellation will be processed immediately upon receipt of the cancellation request, unless there are special circumstances.
                </li>
                <li className="leading-relaxed">
                  If a cancellation request is made while the order is in the shipping preparation status and the product has already been shipped, the buyer shall bear the round-trip shipping costs for the shipped product as a general rule, and the order shall be processed according to the return procedure, not cancellation. However, in the case of electronic tickets where a creditor's right is granted, delivery of the item is unnecessary; therefore, when canceling the purchase of such a product, no round-trip shipping costs shall be borne.
                </li>
                <li className="leading-relaxed">
                  For refunds resulting from cancellations, card payments will be reversed immediately upon completion of the cancellation process.
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 16 (Returns)
              </h3>
              <ul className="space-y-3">
                <li className="leading-relaxed">
                  Members may request a return within 7 days after the delivery completion date, as stipulated by relevant laws and regulations, starting from the date the seller shipped the product.
                </li>
                <li className="leading-relaxed">
                  General matters concerning returns are governed by the Act on Consumer Protection in Electronic Commerce and other relevant laws, which take precedence over conditions presented by the seller.
                </li>
                <li className="leading-relaxed">
                  Costs associated with returns are generally borne by the party responsible for the return. (e.g., buyer's remorse: buyer's responsibility; product defect: seller's responsibility)
                </li>
                <li className="leading-relaxed">
                  Failure to include the return shipping label number when requesting a return, or failure to accurately notify the seller (verbally or in writing) of the reason for the return, may delay the return processing and refund.
                </li>
                <li className="leading-relaxed">
                  Refunds for returns will be processed immediately upon cancellation of the card payment once the returned item arrives at the seller and the reason for return and the party responsible for return shipping costs are confirmed.
                </li>
                <li className="leading-relaxed">
                  If the buyer is responsible for return shipping costs, refunds may be delayed if the additional payment for these costs is not made.
                </li>
                <li className="leading-relaxed">
                  For electronic tickets with assigned rights, physical delivery is unnecessary; therefore, no return shipping costs apply when returning such items.
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 17 (Refunds)
              </h3>
              <ol className="list-decimal list-inside space-y-3">
                <li className="leading-relaxed">
                  When a refund reason arises due to the purchaser's cancellation or return, the payment will be canceled for card payments.
                </li>
                <li className="leading-relaxed">
                  Refunds for purchases made via card payment are, in principle, only possible through card payment cancellation.
                </li>
                <li className="leading-relaxed">
                  This Article may be applied differently depending on the individual service, and detailed information will be provided separately for each individual service.
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 18 (Exclusions from Returns/Exchanges/Refunds)
              </h3>
              <p className="mb-3 leading-relaxed">The purchaser may not request a refund or exchange in the following cases:</p>
              <ol className="list-decimal list-inside space-y-2">
                <li className="leading-relaxed">If the product is lost or damaged due to the purchaser's fault.</li>
                <li className="leading-relaxed">If the product's value has significantly decreased due to the purchaser's use or partial consumption.</li>
                <li className="leading-relaxed">Where the value of the product has significantly decreased to the extent that resale is difficult due to the passage of time</li>
                <li className="leading-relaxed">Where the packaging of a reproducible product has been damaged</li>
                <li className="leading-relaxed">Where the product is custom-made to order or similar, and the seller anticipates irreparable significant damage, provided the seller has separately notified the buyer of this fact for the transaction in advance and obtained the buyer's written consent (including electronic documents)</li>
              </ol>
            </div>
          </section>

          {/* Chapter 4: User Management and Protection */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              Chapter 4: User Management and Protection
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 19 (Representations and Warranties)
              </h3>
              <p className="mb-3 leading-relaxed">
                Members must be at least 18 years of age and not be a Prohibited Person. "Prohibited Persons" include (a) individuals or entities subject to comprehensive sanctions or embargoes, or designated by the United Nations ("UN"), the European Union, the United Kingdom, or the United States; (b) Persons or entities included in the European Union ("EU") Consolidated Sanctions List, the United Kingdom ("UK") Consolidated List of Persons Subject to Financial Sanctions, the U.S. Department of the Treasury's Specially Designated Nationals List, or the U.S. Department of Commerce's Denied Persons List or Entity List.
              </p>
              <p className="mb-3 leading-relaxed">
                (c) if the entity is owned or controlled by an individual or organization described in (a) or (b) above; or (d) if the service is used on behalf of entities described in (a) to (c) above. You acknowledge and agree that you are solely responsible for complying with all applicable laws of the jurisdiction in which you reside, are located, or access the Unione Services.
              </p>
              <p className="mb-3 leading-relaxed">
                You agree and acknowledge that, based on our geographic location controls, your IP address may be screened and blocked by us if you are likely located in any of the following areas: (a) Sanctioned Jurisdictions, (b) Jurisdictions identified or enforced by specific countries, governments, or international authorities as high-risk for sanctions, or (c) Jurisdictions deemed high-risk for using Unione. Members agree and understand that the list of prohibited jurisdictions may be changed arbitrarily at our sole discretion without prior notice.
              </p>
              <p className="leading-relaxed">
                The Member represents and warrants that they are not (i) a Prohibited Person (as defined above), (ii) acting directly or indirectly on behalf of a Prohibited Person, (iii) residing in or accessing the Service from a Sanctioned Jurisdiction, and (iv) a U.S. national.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 20 (User Management)
              </h3>
              <ol className="list-decimal list-inside space-y-3">
                <li className="leading-relaxed">
                  The Company may take the following measures against Members who violate this Agreement, relevant laws and regulations, or general principles of commerce:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Recovery of some or all benefits provided by the Company</li>
                    <li>Restriction of use of specific services</li>
                    <li>Termination of the Service Agreement</li>
                    <li>Claim for damages</li>
                  </ul>
                </li>
                <li className="leading-relaxed">
                  When taking measures under the preceding paragraph, the Company shall notify the Member in advance. Notification may be made through appropriate means, such as contact information provided by the Member while using the service or contact information and social network accounts that the Company can obtain. However, if contact with the Member is lost or there are urgent reasons, the Company may take action first and notify the Member afterward.
                </li>
                <li className="leading-relaxed">
                  Members may raise objections to the Company's actions under this Article if they have grounds for doing so.
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 21 (Member Credit Management)
              </h3>
              <ol className="list-decimal list-inside space-y-3">
                <li className="leading-relaxed">
                  The Company may assign a predetermined grade to a Member based on the Member's purchase amount, frequency, and other usage records, and may grant certain benefits according to each grade.
                </li>
                <li className="leading-relaxed">
                  All matters concerning the grades and benefits assigned by the Company to Members, and any changes thereto, may be announced on a separate service screen.
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 22 (Responsibility for Copyrighted Works)
              </h3>
              <ol className="list-decimal list-inside space-y-3">
                <li className="leading-relaxed">
                  The Company shall endeavor to protect the copyrights of copyright holders in the use of the Service, and Members shall comply with copyright-related laws and regulations.
                </li>
                <li className="leading-relaxed">
                  The copyright for various postings, such as product reviews, created by Members while using the purchase services provided by the Company belongs to the Member who created them. If such postings infringe upon the copyright of others, the Member shall bear responsibility for such infringement.
                </li>
                <li className="leading-relaxed">
                  The Company may delete a post or take measures against the poster, such as restricting use of specific services or terminating the service agreement, if the post falls under any of the following categories. In such cases, the Company shall notify the relevant Member in advance via email. However, this shall not apply if otherwise stipulated by law or if urgent restriction of use is necessary.
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Content that violates the laws and regulations of the Republic of Korea</li>
                    <li>Posting or advertising illegal products or obscene materials whose sale is prohibited under relevant laws and regulations</li>
                    <li>Content that includes false or exaggerated advertising</li>
                    <li>Content that infringes upon another person's rights, reputation, credit, or other legitimate interests</li>
                    <li>Inducing direct transactions or posting links to other sites</li>
                    <li>Containing malicious code or data that may cause malfunction of information and communication devices</li>
                    <li>Violating public order or good morals</li>
                    <li>Being judged to interfere with the smooth operation of the Unione service provided by the Company</li>
                    <li>Containing content related to criminal acts</li>
                    <li>Containing content that may cause political or economic disputes</li>
                  </ul>
                </li>
                <li className="leading-relaxed">
                  The Company may reproduce, distribute, transmit, or display various postings created by members, such as product reviews, on other sites affiliated with the Company for the promotion and advertising of products traded on Unione, provided the Company obtains the member's prior permission for use. The Company may also modify or edit such postings within the scope that does not alter their essential content.
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 23 (Prohibited Acts)
              </h3>

              <h4 className="text-lg font-medium mb-2 mt-4" style={{ color: 'var(--color-text-primary)' }}>
                1. Direct Transactions
              </h4>
              <ul className="space-y-3 mb-4">
                <li className="leading-relaxed">
                  Direct transactions between sellers and buyers without using the Company's provided services are prohibited to ensure transaction safety. Responsibility for all issues arising from direct transactions lies solely with the transacting parties, and the Company shall bear no liability whatsoever for any problems resulting therefrom.
                </li>
                <li className="leading-relaxed">
                  Sellers confirmed to have conducted or induced direct transactions may have their Sales Service Use Agreement terminated. Members may report sellers who conduct or induce direct transactions to the Company.
                </li>
              </ul>

              <h4 className="text-lg font-medium mb-2 mt-4" style={{ color: 'var(--color-text-primary)' }}>
                2. System Misconduct
              </h4>
              <ul className="space-y-3 mb-4">
                <li className="leading-relaxed">
                  Using the service or accessing the system through abnormal methods not provided by the company is prohibited.
                </li>
                <li className="leading-relaxed">
                  Using the service through methods differing from normal usage, such as employing automated access programs, is prohibited.
                </li>
                <li className="leading-relaxed">
                  Collecting or using site information for purposes other than actual use aligned with the site's objectives, such as selling or purchasing goods, is prohibited.
                </li>
                <li className="leading-relaxed">
                  If any of the above system fraud is confirmed, the company may take measures against the member, including recovery of some or all benefits provided by the company, restriction of use of specific services, or termination of the service agreement. The company may also claim compensation for any damages incurred as a result.
                </li>
              </ul>

              <h4 className="text-lg font-medium mb-2 mt-4" style={{ color: 'var(--color-text-primary)' }}>
                3. Payment Fraud
              </h4>
              <ul className="space-y-3 mb-4">
                <li className="leading-relaxed">
                  Using another person's name, card information, account information, etc., to use the company's purchase services is prohibited.
                </li>
                <li className="leading-relaxed">
                  Making abnormal payments through methods prohibited by laws and regulations, such as the Credit Finance Business Act, including obtaining funds under the guise of selling goods or providing services, is prohibited. If such activity is confirmed, the Company may terminate the service agreement, suspend the member's transactions, and notify relevant authorities.
                </li>
                <li className="leading-relaxed">
                  Making purchases without genuine intent to acquire the goods is prohibited. If such activity is confirmed, the Company may cancel the transaction and may impose sanctions depending on the circumstances.
                </li>
              </ul>

              <h4 className="text-lg font-medium mb-2 mt-4" style={{ color: 'var(--color-text-primary)' }}>
                4. Other Prohibited Acts
              </h4>
              <ul className="space-y-3">
                <li className="leading-relaxed">
                  Members must not engage in acts that cause losses to the Company or disrupt the creation of a fair market environment by concluding an abnormally large number of transactions using discounts, benefits, or other incentives provided by the Company. If such acts are confirmed, the Company may cancel the relevant transaction and may impose sanctions, such as suspending transactions, depending on the circumstances.
                </li>
                <li className="leading-relaxed">
                  The Company may suspend membership, refuse or restrict service provision, or take other necessary measures for legal compliance, protection of others' rights, or site security if a member falls under any of the following:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Exporting or re-exporting Unione or tools in violation of export control laws, posted rules, or restrictions</li>
                    <li>Commercializing information or software related to Unione</li>
                  </ul>
                </li>
              </ul>
            </div>
          </section>

          {/* Chapter 5: Miscellaneous */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold mb-6" style={{ color: 'var(--color-text-primary)' }}>
              Chapter 5: Miscellaneous
            </h2>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 24 (Relationship with Supplementary Rules and Related Laws)
              </h3>
              <ol className="list-decimal list-inside space-y-3">
                <li className="leading-relaxed">
                  Matters not specified in these Terms shall be governed by the provisions of relevant laws, such as the Act on Consumer Protection in Electronic Commerce, etc. of the Republic of Korea, and general commercial practices. In case of any dispute regarding the interpretation of these Terms, the Korean version shall prevail.
                </li>
                <li className="leading-relaxed">
                  When transactions are conducted through the purchase services provided by the Company, the relevant laws and regulations, such as the Act on Consumer Protection in Electronic Commerce, etc. of the Republic of Korea, shall take precedence over these Terms and Conditions for the parties to such transactions. The parties to the transaction may not invoke the provisions of these Terms and Conditions to claim exemption from liability against the other party.
                </li>
                <li className="leading-relaxed">
                  The Company may establish matters applicable to specific services (hereinafter referred to as "Individual Terms") as necessary and may notify them in advance through the Company's website, etc.
                </li>
                <li className="leading-relaxed">
                  The Company shall notify any changes to the Individual Terms referred to in the preceding paragraph at least 14 days prior to their implementation.
                </li>
                <li className="leading-relaxed">
                  Members shall monitor whether there are any changes to the contents of these Terms and the Individual Terms, and shall confirm any notified changes.
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 25 (Company's Exemption from Liability)
              </h3>
              <ol className="list-decimal list-inside space-y-3">
                <li className="leading-relaxed">
                  The Company, as a telecommunications sales intermediary, provides only the transaction system based on Unione (mobile, web). All disputes concerning the content of transactions conducted using Unione's transaction system shall be the responsibility of the relevant transaction parties. However, the Company may bear obligations as a telecommunications sales business operator only when it directly sells to purchasers as a seller.
                </li>
                <li className="leading-relaxed">
                  The Company shall not be liable for any damages incurred by members or third parties due to temporary service suspension under Article 11(2). This exclusion does not apply in cases of the Company's intentional misconduct or gross negligence.
                </li>
                <li className="leading-relaxed">
                  The Company shall be exempt from liability for service restrictions or suspensions under Article 11(3) due to force majeure.
                </li>
                <li className="leading-relaxed">
                  The Company shall not be liable for any service disruptions caused by the Member's fault.
                </li>
                <li className="leading-relaxed">
                  The Company shall not be liable for any damages arising from a Member disclosing or providing their personal information to others.
                </li>
                <li className="leading-relaxed">
                  Transactions on Unione may not occur in real time. Transactions on Unione may be restricted or delayed due to the Member's current location, the network of the wireless data service provider used by the Member, or other reasons.
                </li>
                <li className="leading-relaxed">
                  The Company solely provides the platform and application services. The Company is not related in any way to external sales teams, marketing groups, third-party promotional activities, investment solicitations, or product sales conducted outside the platform. The Company shall bear no liability for any agreements, damages, or disputes arising from such external activities.
                </li>
              </ol>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 26 (Jurisdiction)
              </h3>
              <p className="leading-relaxed">
                Any lawsuit involving the Company, its officers, or employees as a party concerning these Terms, the Service Agreement, or disputes between Members shall be subject to the exclusive jurisdiction of the Seoul Central District Court of the Republic of Korea.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3" style={{ color: 'var(--color-text-primary)' }}>
                Article 27 (Miscellaneous Provisions)
              </h3>
              <ol className="list-decimal list-inside space-y-3">
                <li className="leading-relaxed">
                  The Company may temporarily or permanently modify or suspend all or part of specific services as necessary.
                </li>
                <li className="leading-relaxed">
                  Neither the Company nor the Member may assign any rights or obligations under these Terms to a third party without the express consent of the other party.
                </li>
                <li className="leading-relaxed">
                  Any additional agreements, contracts, notices, or other documents created by mutual consent between the parties in connection with these Terms, as well as any content the Company notifies Members of through Unione due to changes in Company policy, enactment or amendment of laws and regulations, or public agency notices or guidelines, shall also constitute part of these Terms.
                </li>
                <li className="leading-relaxed">
                  The Company shall provide guidance in the sorting method display area regarding the primary criteria determining the order in which products are displayed when Members search for products.
                </li>
              </ol>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
