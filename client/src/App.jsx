import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Services from './pages/Services';
import Assets from './pages/Assets';
import Corporate from './pages/Corporate';
import Investors from './pages/Investors';
import Media from './pages/Media';
import Career from './pages/Career';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import PersonalDataProtectionNotice from './pages/PersonalDataProtectionNotice';
import LegalDisclaimer from './pages/LegalDisclaimer';
import SearchResults from './pages/SearchResults';
import ComingSoon from './pages/ComingSoon';
import MediaReleasesPage from './pages/media/MediaReleasesPage';
import PhotoLibrary from './pages/media/PhotoLibrary';
import CorporateOverview from './pages/about/CorporateOverview';
import QHSE from './pages/about/QHSE';
import GroupStructure from './pages/about/GroupStructure';
import BoardOfDirectors from './pages/about/BoardOfDirectors';
import LeadershipTeam from './pages/about/LeadershipTeam';
import EngineeringConstruction from './pages/services/EngineeringConstruction';
import Engineering from './pages/services/Engineering';
import TrackRecord from './pages/services/TrackRecord';
import CaseStudyLargeStructures from './pages/services/CaseStudyLargeStructures';
import CaseStudyMultipleStructures from './pages/services/CaseStudyMultipleStructures';
import EPC from './pages/services/EPC';
import EPCIC from './pages/services/EPCIC';
import OffshoreConstruction from './pages/services/OffshoreConstruction';
import WellIntervention from './pages/services/WellIntervention';
import OperationsMaintenance from './pages/services/OperationsMaintenance';
import HookupCommissioning from './pages/services/HookupCommissioning';
import Drilling from './pages/services/Drilling';
import DrillingCapabilities from './pages/services/DrillingCapabilities';

import EngineeringConstructionAssets from './pages/assets/EngineeringConstructionAssets';
import OperationsMaintenanceAssets from './pages/assets/OperationsMaintenanceAssets';
import DrillingAssets from './pages/assets/DrillingAssets';
import ComplianceEthics from './pages/corporate/ComplianceEthics';
import StrengthWithPurpose from './pages/corporate/StrengthWithPurpose';
import BoardCharter from './pages/corporate/BoardCharter';
import WhistleblowingPortal from './pages/corporate/WhistleblowingPortal';
import CodeOfEthicalConduct from './pages/corporate/CodeOfEthicalConduct';
import AntiBriberyPolicy from './pages/corporate/AntiBriberyPolicy';
import DirectorsFitProperPolicy from './pages/corporate/DirectorsFitProperPolicy';
import BoardAuditCommittee from './pages/corporate/BoardAuditCommittee';
import BoardNominationRemunerationCommittee from './pages/corporate/BoardNominationRemunerationCommittee';
import BoardRiskCommittee from './pages/corporate/BoardRiskCommittee';

// Add new pages here, e.g.
// <Route path="about-us/board-of-directors" element={<BoardOfDirectors />} />
// Any menu link without a route shows the ComingSoon page.
export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="about-us/corporate-overview" element={<CorporateOverview />} />
        <Route path="about-us/quality-health-safety-and-environment" element={<QHSE />} />
        <Route path="about-us/group-organisational-structure" element={<GroupStructure />} />
        <Route path="about-us/board-of-directors" element={<BoardOfDirectors />} />
        <Route path="about-us/leadership-team" element={<LeadershipTeam />} />
        <Route path="services" element={<Services />} />
        <Route path="services/engineering-and-construction" element={<EngineeringConstruction />} />
        <Route path="services/engineering-and-construction/engineering" element={<Engineering />} />
        <Route path="services/engineering-and-construction/track-record" element={<TrackRecord />} />
        <Route path="services/engineering-and-construction/case-studies/large-structures" element={<CaseStudyLargeStructures />} />
        <Route path="services/engineering-and-construction/case-studies/multiple-structures" element={<CaseStudyMultipleStructures />} />
        <Route path="services/engineering-and-construction/epcic" element={<EPCIC />} />
        <Route path="services/engineering-and-construction/epcic/engineering-procurement-and-construction-epc" element={<EPC />} />
        <Route path="services/engineering-and-construction/epcic/offshore-construction-and-installation" element={<OffshoreConstruction />} />
        <Route path="services/engineering-and-construction/well-intervention-and-decommissioning" element={<WellIntervention />} />
        <Route path="services/operations-and-maintenance" element={<OperationsMaintenance />} />
        <Route path="services/operations-and-maintenance/topside-maintenance" element={<OperationsMaintenance />} />
        <Route path="services/operations-and-maintenance/subsea-services" element={<OperationsMaintenance />} />
        <Route path="services/operations-and-maintenance/brownfield-rejuvenation" element={<OperationsMaintenance />} />
        <Route path="services/operations-and-maintenance/offshore-support-vessels" element={<OperationsMaintenance />} />
        <Route path="services/operations-and-maintenance/geosurvey-and-geotechnical" element={<OperationsMaintenance />} />
        <Route path="services/operations-and-maintenance/hook-up-and-commissioning" element={<HookupCommissioning />} />
        <Route path="services/drilling-and-completion" element={<Drilling />} />
        <Route path="services/drilling-and-completion/drilling-capabilities" element={<DrillingCapabilities />} />
        <Route path="services/drilling-and-completion/drilling-capabilities/tender-assist-rigs" element={<DrillingAssets />} />
        <Route path="services/drilling-and-completion/drilling-capabilities/semi-tender-rigs" element={<DrillingAssets />} />

        <Route path="assets" element={<Assets />} />
        <Route path="assets/engineering-and-construction" element={<EngineeringConstructionAssets />} />
        <Route path="assets/operations-and-maintenance" element={<OperationsMaintenanceAssets />} />
        <Route path="assets/drilling" element={<DrillingAssets />} />
        <Route path="corporate" element={<Corporate />} />
        <Route path="corporate/strength-with-purpose" element={<StrengthWithPurpose />} />
        <Route path="corporate/compliance-and-business-ethics" element={<ComplianceEthics />} />
        <Route path="corporate/compliance-and-business-ethics/whistleblowing-portal" element={<WhistleblowingPortal />} />
        <Route path="corporate/compliance-and-business-ethics/code-of-ethical-conduct" element={<CodeOfEthicalConduct />} />
        <Route path="corporate/compliance-and-business-ethics/whistleblowing-policy" element={<CodeOfEthicalConduct />} />
        <Route path="corporate/compliance-and-business-ethics/anti-bribery-anti-corruption" element={<AntiBriberyPolicy />} />
        <Route path="corporate/governance/board-charter" element={<BoardCharter />} />
        <Route path="corporate/governance/directors-fit-and-proper-policy" element={<DirectorsFitProperPolicy />} />
        <Route path="corporate/governance/terms-of-reference-for-board-audit-committee" element={<BoardAuditCommittee />} />
        <Route path="corporate/governance/terms-of-reference-for-board-nomination-and-remuneration-committee" element={<BoardNominationRemunerationCommittee />} />
        <Route path="corporate/governance/terms-of-reference-for-board-risk-management-committee" element={<BoardRiskCommittee />} />
        <Route path="corporate/compliance-and-business-ethics" element={<ComplianceEthics />} />
        <Route path="investors" element={<Investors />} />
        <Route path="media" element={<Media />} />
        <Route path="media/media-releases" element={<MediaReleasesPage />} />
        <Route path="media/photo-library" element={<PhotoLibrary />} />
        <Route path="career" element={<Career />} />
        <Route path="contact-us" element={<ContactUs />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="privacy-policy/personal-data-protection-notice" element={<PersonalDataProtectionNotice />} />
        <Route path="legal-disclaimer" element={<LegalDisclaimer />} />
        <Route path="search" element={<SearchResults />} />
        <Route path="*" element={<ComingSoon />} />
      </Route>
    </Routes>
  );
}
