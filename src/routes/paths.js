function path(root, sublink) {
  return `${root}${sublink}`;
}

const ROOTS_AUTH = "/auth";
const ROOTS_DASHBOARD = "/dashboard";

export const PATH_AUTH = {
  root: ROOTS_AUTH,
};

export const PATH_PAGE = {
  requestService: "/service-request",
  contact: "/contact-us",
};

export const PATH_DASHBOARD = {
  root: ROOTS_DASHBOARD,
  home: {
    index: path(ROOTS_DASHBOARD, "/index"),
    adminRecapDetails: path(ROOTS_DASHBOARD, "/admin-recap-details"),
    recapDetails: path(ROOTS_DASHBOARD, "/recap-details"),
    commissariatThresholdRecapDetails: path(
      ROOTS_DASHBOARD,
      "/commissariat-threshold-recap-details"
    ),
    adminCommissariatThresholdRecapDetails: path(
      ROOTS_DASHBOARD,
      "/admin-commissariat-threshold-details-statistics"
    ),
    turnoverOfTheProfessionDetails: path(
      ROOTS_DASHBOARD,
      "/turnover-of-the-profession-details-statistics"
    ),
    adminTurnoverOfTheProfessionDetails: path(
      ROOTS_DASHBOARD,
      "/admin-turnover-of-the-profession-details-statistics"
    ),
  },
  taxpayers: {
    taxpayersList: path(ROOTS_DASHBOARD, "/taxpayers/list"),
    taxpayersDetail: path(ROOTS_DASHBOARD, "/taxpayers/detail/:id"),
    taxpayersDetails: path(ROOTS_DASHBOARD, "/taxpayers/details"),
    taxpayersForms: path(ROOTS_DASHBOARD, "/taxpayers/forms/:id"),
    taxpayersModificationPage: path(
      ROOTS_DASHBOARD,
      "/taxpayers/taxpayers-modification-page"
    ),
    taxpayersAdd: path(ROOTS_DASHBOARD, "/taxpayers/add"),
    cgaGenerate: path(ROOTS_DASHBOARD, "/taxpayers/cga-generate"),
    awardsList: path(ROOTS_DASHBOARD, "/taxpayers/awards-list"),
    automaticAwardingPage: path(
      ROOTS_DASHBOARD,
      "/taxpayers/automatic-awarding-page"
    ),
    importationList: path(ROOTS_DASHBOARD, "/taxpayers/importation-list"),
    importDetail: path(ROOTS_DASHBOARD, "/taxpayers/import-detail"),
    importModificationPage: path(
      ROOTS_DASHBOARD,
      "/taxpayers/import-modification-page"
    ),
  },
  taxes: {
    listOfTaxes: path(ROOTS_DASHBOARD, "/taxes/list-of-taxes"),
  },
  affected: {
    affectedTaxpayerList: path(
      ROOTS_DASHBOARD,
      "/affected/affected-taxpayers-list"
    ),
  },
  report: {
    reportList: path(ROOTS_DASHBOARD, "/report/list"),
    reportDetails: path(ROOTS_DASHBOARD, "/report/details"),
  },
  consommateurs: {
    constumerList: path(ROOTS_DASHBOARD, "/consommateurs/list"),
    invoice: path(ROOTS_DASHBOARD, "/consommateurs/invoice"),
  },
  arbitration: {
    arbitrationList: path(ROOTS_DASHBOARD, "/arbitration/arbitration-list"),
    listOfArbitration: path(
      ROOTS_DASHBOARD,
      "/arbitration/list-of-arbitration"
    ),
    arbitrationDetails: path(
      ROOTS_DASHBOARD,
      "/arbitration/arbitration-details/:id"
    ),
    detailsOfArbitration: path(ROOTS_DASHBOARD, "/arbitration/:id/details"),
    arbitrationTransfers: path(
      ROOTS_DASHBOARD,
      "/arbitration/arbitration-transfers"
    ),
  },
  accountant: {
    expertAccountantList: path(
      ROOTS_DASHBOARD,
      "/expertaccountant/expertaccountant-list"
    ),
  },
  access: {
    accessList: path(ROOTS_DASHBOARD, "/access/list"),
    accessProfilsDetails: path(
      ROOTS_DASHBOARD,
      "/access/access-profils-details"
    ),
    accessAdd: path(ROOTS_DASHBOARD, "/access/access-add"),
  },
  payment: {
    paymentList: path(ROOTS_DASHBOARD, "/payment/list"),
    paymentDetails: path(ROOTS_DASHBOARD, "/payment/details"),
    paymentEdit: path(ROOTS_DASHBOARD, "/payment/editer-payement"),
  },
  bundles: {
    bundlesList: path(ROOTS_DASHBOARD, "/bundles/list"),
    bundlesDetails: path(ROOTS_DASHBOARD, "/bundles/details"),
    bundlesHistoryList: path(ROOTS_DASHBOARD, "/bundles/history-list"),
    balanceSheet: path(ROOTS_DASHBOARD, "/bundles/balance-sheet"),
    accountResultPage: path(ROOTS_DASHBOARD, "/bundles/account-result-page"),
    flowTablePage: path(ROOTS_DASHBOARD, "/bundles/flow-table-page"),
    visaAttestationReportPage: path(
      ROOTS_DASHBOARD,
      "/bundles/visa-attestation-report-page"
    ),
  },
  offers: {
    offers: path(ROOTS_DASHBOARD, "/offers"),
    DifferentOffers: path(ROOTS_DASHBOARD, "/different-offers"),
    PaiementPage: path(ROOTS_DASHBOARD, "/paiement-page"),
    OffersList: path(ROOTS_DASHBOARD, "/offersadmin/list"),
    addAdminOffers: path(ROOTS_DASHBOARD, "/offers/add-admin-offers"),
    offersDetails: path(ROOTS_DASHBOARD, "/offers/offers-details"),
  },
  campaign: {
    campaignList: path(ROOTS_DASHBOARD, "/campaign/list"),
    addCampaign: path(ROOTS_DASHBOARD, "/add-campaign/form"),
  },
  direction: {
    directionList: path(ROOTS_DASHBOARD, "/direction/list"),
    addDirection: path(ROOTS_DASHBOARD, "/add-direction/form"),
    importList: path(ROOTS_DASHBOARD, "/import/list"),
  },
  taxService: {
    taxServiceList: path(ROOTS_DASHBOARD, "/tax-service/list"),
    addServiceForm: path(ROOTS_DASHBOARD, "/add-service/form"),
  },
  statistic: {
    statisticList: path(ROOTS_DASHBOARD, "/statistic/list"),
  },
};
