import Navbar from "@/components/navbar/navbar";
import styles from "./page.module.scss";
import Accordion from "@/components/accordion/accordion";
import PaymentsSection from "@/components/payments/payments";
import RewardSection from "@/components/rewards/rewardSection";
import DataPrivacySection from "@/components/dataPrivacy/dataPrivacySection";
import UserTrustSection from "@/components/userTrust/userTrust";
import MembershipSection from "@/components/membership/membershipSection";
import DetailedFooterSection from "@/components/detailedFooter/detailedFooterSection";
import FooterBaseSection from "@/components/footerBase/footerBaseSection";
import CardBenefitsSection from "@/components/cardBenefits/cardBenefitsSection";
import MemberBenefitsSection from "@/components/memberBenefits/memberBenefitsSection";
import MembershipIntroSection from "@/components/memebershipIntro/membershipIntroSection";
import HeaderSection from "@/components/header/headerSection";

export default function Home() {
  return (
    <div className={styles.main}>
      <Navbar />
      <HeaderSection />
      <MembershipIntroSection />
      <MemberBenefitsSection />
      <CardBenefitsSection />
      <PaymentsSection />
      <RewardSection />
      <DataPrivacySection />
      <UserTrustSection />
      <MembershipSection />
      <Accordion />
      <DetailedFooterSection />
      <FooterBaseSection />
    </div>
  );
}
