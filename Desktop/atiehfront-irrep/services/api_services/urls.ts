// All url inserted in this file

/** server base Url */

// export const rootUrl = "http://185.142.157.53:70/";
// export const evaluationUrls = "http://185.142.157.53:70/api/admin/evaluation/";
// export const rootUrl = "http://185.213.9.74/backend/public/";
// export const evaluationUrls =
//   "http://185.213.9.74/backend/public/api/admin/evaluation/";

// http://185.142.157.175:70/newAtieh/public/api/login?Username=70707070&Password=70707070

// origin
// export const rootUrl = "http://atieh.real/api/";
export const rootUrl = "http://80.210.30.15:9734/dev/apiatoAtieh/public/api/";
// export const rootUrl = "http://atieh.real/api/";
export const evaluationUrls =
  "http://rate.pasokhgoo.ir/backend/public/api/admin/evaluation/";

// test
// export const rootUrl = "http://rate.pasokhgoo.ir/test/backend/public/";
// export const evaluationUrls =
//   "http://rate.pasokhgoo.ir/test/backend/public/api/admin/evaluation/";

/** server route Urls */
export const url = {
  /** parameters urls */
  parameters: {
    all: evaluationUrls + "parameters/all",
    show: evaluationUrls + "parameters/show/",
    add: evaluationUrls + "parameters/create",
    update: evaluationUrls + "parameters/update",
    delete: evaluationUrls + "parameters/delete",
    searchBylevel: evaluationUrls + "parameters/search_by_level/",
  },
  /** parameters urls */
  parametersGroup: {
    all: rootUrl + "api/admin/parameter/groups/all",
    show: rootUrl + "api/admin/parameter/groups/show/",
    add: rootUrl + "api/admin/parameter/groups/create",
    update: rootUrl + "api/admin/parameter/groups/update",
    delete: rootUrl + "api/admin/parameter/groups/delete",
  },
  /** test urls */
  test: {
    // login: rootUrl + "api/v1/oauth/token",

    // asr: "http://80.210.30.15:70:70/newAtieh/public/api/take_asr",
    // abcl: "http://80.210.30.15:70:70/newAtieh/public/api/take_abcl",
    report: rootUrl + "get_report",
    newasr: rootUrl + "irrep/asr/start",
    newabcl: rootUrl + "irrep/abcl/start",
    reportasr: rootUrl + "irrep/asr/report",
    reportabcl: rootUrl + "irrep/abcl/report",
    userReports : rootUrl + "user/sheet_reports",
    abclChild1: rootUrl + "irrep/abcl/children/0",
    abclChild2: rootUrl + "irrep/abcl/children/1",
    asrChild1: rootUrl + "irrep/asr/children/1",
    asrChild2: rootUrl + "irrep/asr/children/2",
    userProfile: rootUrl + "irrep/user/profile",
    colleaguesList: rootUrl + "irrep/abcl/colleague",

    // ?Guid=5f4d0c20-cdb0-11eb-ab75-2f0573e7a301&Owner=2&TestName=asr
    // ?Guid=5f4d0c20-cdb0-11eb-ab75-2f0573e7a301&Owner=1
  },
  /** login urls */
  login: {
    // sendSms: rootUrl + "users/sendsms",
    sendSms: rootUrl + "irrep/sendsms",
    check: rootUrl + "users/check",

    // login: rootUrl + "api/v1/oauth/token",
    login: rootUrl + "irrep/login",
    submitSelfInfo: rootUrl + "save/personal_info",
    submitFamilyInfo: rootUrl + "save/spouse_info",
  },
  /** packs urls */
  packs: {
    all: evaluationUrls + "packs/all",
    show: evaluationUrls + "pack/show/",
    add: evaluationUrls + "pack/create",
    update: evaluationUrls + "pack/update",
    delete: evaluationUrls + "pack/delete",
    levels: evaluationUrls + "pack/levels/all/",
    filtered: evaluationUrls + "packs/allocate/all",
    copy: evaluationUrls + "pack/create/copy",
  },

  /** levels urls */
  levels: {
    all: evaluationUrls + "levels/all",
    show: evaluationUrls + "level/show/",
    add: evaluationUrls + "level/create",
    update: evaluationUrls + "level/update",
    delete: evaluationUrls + "level/delete",
  },
  /** subject urls */
  subject: {
    all: rootUrl + "api/subjects/all",
  },
  /** setems urls */
  systems: {
    all: rootUrl + "api/systems/all",
  },
  /** model urls */
  model: {
    all: evaluationUrls + "models/all",
    show: evaluationUrls + "model/show/",
    add: evaluationUrls + "model/create",
    update: evaluationUrls + "model/update",
    delete: evaluationUrls + "model/delete",
    filter: evaluationUrls + "models/allocate/all",
  },
  /** period urls */
  period: {
    all: evaluationUrls + "periods/all",
    show: evaluationUrls + "periods/show/",
    add: evaluationUrls + "periods/create",
    update: evaluationUrls + "periods/update",
    delete: evaluationUrls + "periods/delete",
  },

  /** evaluations urls */
  evaluations: {
    all: rootUrl + "api/admin/evaluations/all",
    // show: rootUrl + "periods/show/",
    add: rootUrl + "api/admin/evaluations/create",
    update: rootUrl + "api/admin/evaluations/update",
    delete: rootUrl + "api/admin/evaluations/delete",
    evaluatorsHistory: rootUrl + "api/evaluator/states/show/",
  },
  /** evaluators urls */
  evaluators: {
    all: rootUrl + "api/admin/evaluators/all",
    show: rootUrl + "api/admin/user/evaluators/show/",
    showEvaluator: rootUrl + "api/admin/evaluator/show/",
    add: rootUrl + "api/admin/evaluator/create",
    update: rootUrl + "api/admin/evaluator/update",
    delete: rootUrl + "api/admin/evaluator/delete",
    userEvaluators: rootUrl + "api/admin/user/evaluators/show/",
  },
  parametersBank: {
    all: rootUrl + "api/admin/parameters/bank/all",
    show: rootUrl + "api/admin/parameters/bank/show?ID=",
    add: rootUrl + "api/admin/parameters/bank/create",
    update: rootUrl + "api/admin/parameters/bank/update",
    delete: rootUrl + "api/admin/parameters/bank/delete",
  },
  checkLoggedIn: {
    check: rootUrl + "api/check_logged_in",
  },
  logOut: {
    logOut: rootUrl + "api/logout",
  },
  /** allocation Management urls */
  allocationManagement: {
    all: rootUrl + "api/evaluator/cartable_takhsis/all",
    getQuestions: rootUrl + "api/evaluator/get_questions_to_evaluate",
    saveQuestions: rootUrl + "api/evaluator/save_questions",
  },
  /** worksManagement urls */
  worksManagement: {
    all: rootUrl + "api/evaluator/questions/cartable/works",
    // all: rootUrl + "api/evaluator/question/history/1091",
    questionInfo: rootUrl + "api/evaluator/question/get/info/all",
    questionerInfo: rootUrl + "api/evaluating/question/questioner/info/show/",
    questionerHistory: rootUrl + "api/evaluating/question/responder/history",
    questionEvaluationInfo: rootUrl + "api/evaluator/question/show/",
    questionEvaluate: rootUrl + "api/evaluator/question/create",
    createAndNew: rootUrl + "api/evaluator/question/registerandnew",
    canceled: rootUrl + "api/evaluator/question/canceled",
  },
  /** excellentEvaluator urls */
  excellentEvaluator: {
    all: rootUrl + "api/evaluator/question/confirmed/evaluated/all",
    confirm: rootUrl + "api/evaluator/question/final/confirm",
    canceled: rootUrl + "api/evaluator/question/canceled/confirm",
    advise: rootUrl + "api/evaluator/question/confirm/request/consulting",
    group: rootUrl + "api/evaluator/question/final/confirm/group",
    registerandnew: rootUrl + "api/evaluator/question/registerandnew/confirm",
    // changeEvaluator: rootUrl + "api/evaluator/question/change_evaluator",
  },
  questionDifficaulty: {
    all: evaluationUrls + "difflevel/all",
    show: evaluationUrls + "difflevel/show/",
    add: evaluationUrls + "difflevel/create",
    update: evaluationUrls + "difflevel/update",
    delete: evaluationUrls + "difflevel/delete/",
  },

  messages: {
    all: rootUrl + "api/evaluator/messages/all",
    show: rootUrl + "api/evaluator/messages/show/",
    count: rootUrl + "api/evaluator/messages/count",
    delete: rootUrl + "api/evaluator/messages/delete/",
  },
  /** excellentEvaluator urls */
  advisor: {
    all: rootUrl + "api/evaluator/questions/cartable/advisor",
    confirm: rootUrl + "api/evaluator/question/advisor/confirm",
  },
  timeLine: {
    all: rootUrl + "api/evaluator/question/history/",
    show: rootUrl + "api/evaluator/question/step/show/",
  },
  keyWords: {
    all: rootUrl + "api/evaluator/get_keywords",
  },
  generateReport: {
    all: rootUrl + "api/admin/workbook/all",
    userScore: rootUrl + "api/admin/workbook/show?EvaluationID=",
    save: rootUrl + "api/admin/workbook/save",
  },
  objections: {
    firstAll: rootUrl + "api/evalution/users/first/protests/all",
    secondAll: rootUrl + "api/evalution/users/second/protests/all",
    questions: rootUrl + "api/evalution/user/protest/questions",
    userShow: rootUrl + "api/evalution/user/protests/show/",
    questionShow: rootUrl + "api/evalution/quetion/protest/show/",
    userReply: rootUrl + "api/evalution/user/protests/reply",
    questionReply: rootUrl + "api/evalution/user/protest/question/reply",
  },
  conclusion: {
    allWorkbooks: rootUrl + "api/admin/conclusions/show_all_workbooks?UserID=",
    categories: rootUrl + "api/admin/conclusion/suggestions/categories/get",
    suggestions:
      rootUrl + "api/admin/conclusion/suggestions/items/get?CategoryID=",
    list_taied_movaghat: rootUrl + "api/admin/conclusions/list_taied_movaghat",
    save: rootUrl + "api/admin/conclusions/create",
    saveNew: rootUrl + "api/admin/conclusion/suggestions/create",
    getPeple: rootUrl + "api/admin/workbook/get_people",
    find: rootUrl + "api/admin/conclusions/find",
    list: rootUrl + "api/admin/conclusions/list",
    update: rootUrl + "api/admin/conclusions/update",
  },
  editting: {
    all: rootUrl + "api/admin/conclusions/list",
    show: rootUrl + "api/admin/conclusions/find",
    save: rootUrl + "api/admin/conclusions/updatee",
  },
  catagories: {
    all: rootUrl + "api/admin/conclusion/suggestions/categories/get",
    show: rootUrl + "api/admin/suggestion/categories/show?ID=",
    add: rootUrl + "api/admin/suggestion/categories/create",
    update: rootUrl + "api/admin/suggestion/categories/update",
    delete: rootUrl + "api/admin/suggestion/categories/delete",
  },
  items: {
    all: rootUrl + "api/admin/conclusion/suggestions/items/get?CategoryID=",
    show: rootUrl + "api/admin/suggestion/items/show?ID=",
    add: rootUrl + "api/admin/suggestion/items/create",
    update: rootUrl + "api/admin/suggestion/items/update",
    delete: rootUrl + "api/admin/suggestion/items/delete",
  },
  mainPage: {
    all: rootUrl + "api/main_page",
  },
  roles: {
    all: rootUrl + "api/admin/xroles/all",
    // all: "http://185.213.9.74/backend/public/api/admin/xroles/all",
  },
  voice: {
    all: rootUrl + "api/phone/records?CallID=",
    // all: "http://185.213.9.74/test/backend/public/api/phone/records?CallID=15042847",
  },
};
