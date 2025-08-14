const manager = {
    netEmail: false,
    netName: false,
    netMobile: false
};
class codekataCards {
    renderCards(data) {
        try {
            let codekataOpenUI = "";
            let codekataLockedUI = "";
            let codekataPriorityUIObject = {};
            let codekataPriorityUI = "";
            let tagsName = "";
            let tagsCount = 0;
            let pointsAvailable = 0;
            let solved = 0;
            let pointsEarned = 0;
            let overAllSubmission = 0;
            let trialCount = 0;
            let priorityTags = ["Input/Output", "absolute beginner", "Hello"];
            for (let itr = 0; itr < data.overallData.length; itr++) {
                tagsName = data.overallData[itr]._id;
                data.overallData[itr].submissionCount = (data.overallSubmissions && data.overallSubmissions[tagsName]) ? data.overallSubmissions[tagsName] : 0;
            }
            data.overallData.sort(function(a, b) {
                return b.submissionCount - a.submissionCount;
            });
            for (let itr = 0; itr < data.overallData.length; itr++) {
                tagsName = data.overallData[itr]._id;
                tagsCount = data.overallData[itr].count;
                pointsAvailable = data.overallData[itr].pointsAvailable;
                solved = (data.validSubmissions && data.validSubmissions[tagsName]) ? data.validSubmissions[tagsName].count : 0;
                pointsEarned = (data.validSubmissions && data.validSubmissions[tagsName]) ? data.validSubmissions[tagsName].pointsEarned : 0;
                overAllSubmission = (data.overallSubmissions && data.overallSubmissions[tagsName]) ? data.overallSubmissions[tagsName] : 0;
                trialCount = data.configurationDetails[tagsName] ? data.configurationDetails[tagsName] : 0;
                if (data.overallData[itr].count >= 10 && authorize.getSession("authToken")) {
                    if ((data.paidUser || trialCount) && trialCount != -1 && priorityTags.includes(data.overallData[itr]._id)) {
                        codekataPriorityUIObject[tagsName] = '<div class="col-md-12 col-lg-6 col-xl-4" id="' + tagsName + '"><div class="card concept-card shadow-sm"><div class="card-header d-flex flex-row"><h2 class="concept-topic">' + tagsName + '</h2></div><div class="card-body"><ul class="list-group list-group-horizontal  list-group-flush card-score"><li class="list-group-item"><strong>' + solved + '/' + tagsCount + '</strong><span>Solved</span></li><li class="list-group-item"><strong>' + pointsEarned + '/' + pointsAvailable + '</strong><span>Geekoins</span></li><li class="list-group-item"><i class="icon-award-none"></i></li></ul><div class="d-flex justify-content-between"><span class="card-text">Submissions : ' + overAllSubmission + '</span><a href="/code-kata-main?concept=' + tagsName + '" data-topic=' + tagsName + ' class="topic-button btn btn-primary">Start</a></div><div class="hover-links-wrap"><ul class="list-unstyled d-flex flex-row justify-content-end secondary-links"><li class="share-link"><a href="#" id="' + tagsName + '" onClick="share_modal_ck(this.id)"><i class="fas fa-share-alt"></i><span>Share</span></a></li></ul></div></div></div></div>';
                    } else if ((data.paidUser || trialCount) && trialCount != -1) {
                        codekataOpenUI += '<div class="col-md-12 col-lg-6 col-xl-4" id="' + tagsName + '"><div class="card concept-card shadow-sm"><div class="card-header d-flex flex-row"><h2 class="concept-topic">' + tagsName + '</h2></div><div class="card-body"><ul class="list-group list-group-horizontal  list-group-flush card-score"><li class="list-group-item"><strong>' + solved + '/' + tagsCount + '</strong><span>Solved</span></li><li class="list-group-item"><strong>' + pointsEarned + '/' + pointsAvailable + '</strong><span>Geekoins</span></li><li class="list-group-item"><i class="icon-award-none"></i></li></ul><div class="d-flex justify-content-between"><span class="card-text">Submissions : ' + overAllSubmission + '</span><a href="/code-kata-main?concept=' + tagsName + '" data-topic=' + tagsName + ' class="topic-button btn btn-primary">Start</a></div><div class="hover-links-wrap"><ul class="list-unstyled d-flex flex-row justify-content-end secondary-links"><li class="share-link"><a href="#" id="' + tagsName + '" onClick="share_modal_ck(this.id)"><i class="fas fa-share-alt"></i><span>Share</span></a></li></ul></div></div></div></div>';
                    } else if (trialCount != -1) {
                        codekataLockedUI += '<div class="col-md-12 col-lg-6 col-xl-4" id="' + tagsName + '"><div class="card concept-card shadow-sm"><div class="card-header d-flex flex-row"><h2 class="concept-topic">' + tagsName + '</h2></div><div class="card-body"><ul class="list-group list-group-horizontal  list-group-flush card-score"><li class="list-group-item glass-blur"><strong>' + solved + '/' + tagsCount + '</strong><span>Solved</span></li><li class="list-group-item glass-blur"><strong>' + pointsEarned + '/' + pointsAvailable + '</strong><span>Geekoins</span></li><li class="list-group-item glass-blur"><i class="icon-award-none"></i></li></ul><div class="d-flex justify-content-between"><span class="card-text text-highlight glass-blur">Submissions : ' + overAllSubmission + '</span><a href="#" class="btn btn-primary up-lift">Unlock</a></div><div class="layer"></div></div></div></div>';
                    }
                } else if (data.overallData[itr].count >= 10) {
                    if ((data.paidUser || trialCount) && trialCount != -1 && priorityTags.includes(data.overallData[itr]._id)) {
                        codekataPriorityUIObject[tagsName] = '<div class="col-md-12 col-lg-6 col-xl-4" id="' + tagsName + '"><div class="card concept-card shadow-sm"><div class="card-header d-flex flex-row"><h2 class="concept-topic">' + tagsName + '</h2></div><div class="card-body"><ul class="list-group list-group-horizontal  list-group-flush card-score"><li class="list-group-item"><strong>' + solved + '/' + tagsCount + '</strong><span>Solved</span></li><li class="list-group-item"><strong>' + pointsEarned + '/' + pointsAvailable + '</strong><span>Geekoins</span></li><li class="list-group-item"><i class="icon-award-none"></i></li></ul><div class="d-flex justify-content-between"><span class="card-text">Submissions : ' + overAllSubmission + '</span><a href="#" class="btn btn-primary navigationLink">Start</a></div><div class="hover-links-wrap"><ul class="list-unstyled d-flex flex-row justify-content-end secondary-links"><li class="share-link"><a href="#" id="' + tagsName + '" onClick="share_modal_ck(this.id)"><i class="fas fa-share-alt"></i><span>Share</span></a></li></ul></div></div></div></div>';
                    } else if ((data.paidUser || trialCount) && trialCount != -1) {
                        codekataOpenUI += '<div class="col-md-12 col-lg-6 col-xl-4" id="' + tagsName + '"><div class="card concept-card shadow-sm"><div class="card-header d-flex flex-row"><h2 class="concept-topic">' + tagsName + '</h2></div><div class="card-body"><ul class="list-group list-group-horizontal  list-group-flush card-score"><li class="list-group-item"><strong>' + solved + '/' + tagsCount + '</strong><span>Solved</span></li><li class="list-group-item"><strong>' + pointsEarned + '/' + pointsAvailable + '</strong><span>Geekoins</span></li><li class="list-group-item"><i class="icon-award-none"></i></li></ul><div class="d-flex justify-content-between"><span class="card-text">Submissions : ' + overAllSubmission + '</span><a href="#" class="btn btn-primary navigationLink">Start</a></div><div class="hover-links-wrap"><ul class="list-unstyled d-flex flex-row justify-content-end secondary-links"><li class="share-link"><a href="#" id="' + tagsName + '" onClick="share_modal_ck(this.id)"><i class="fas fa-share-alt"></i><span>Share</span></a></li></ul></div></div></div></div>';
                    } else if (trialCount != -1) {
                        codekataLockedUI += '<div class="col-md-12 col-lg-6 col-xl-4" id="' + tagsName + '"><div class="card concept-card shadow-sm"><div class="card-header d-flex flex-row"><h2 class="concept-topic">' + tagsName + '</h2></div><div class="card-body"><ul class="list-group list-group-horizontal  list-group-flush card-score"><li class="list-group-item glass-blur"><strong>' + solved + '/' + tagsCount + '</strong><span>Solved</span></li><li class="list-group-item glass-blur"><strong>' + pointsEarned + '/' + pointsAvailable + '</strong><span>Geekoins</span></li><li class="list-group-item glass-blur"><i class="icon-award-none"></i></li></ul><div class="d-flex justify-content-between"><span class="card-text text-highlight glass-blur">Submissions : ' + overAllSubmission + '</span><a href="#premiumPopup" class="btn btn-primary up-lift">Unlock</a></div><div class="layer"></div></div></div></div>';
                    }
                }
            }
            for (let itr = 0; itr < priorityTags.length; itr++) {
                if (priorityTags[itr] in codekataPriorityUIObject) {
                    codekataPriorityUI += codekataPriorityUIObject[priorityTags[itr]];
                }
            }
            $("#codekataTags").html(codekataPriorityUI + codekataOpenUI + codekataLockedUI);
            $("#codekataTags .concept-topic").css({
                "text-transform": "capitalize",
                "font-size": "1.1rem",
                "font-weight": "600",
                "color": "#212529"
            });
            codeKataPage.init();
        } catch (error) {
            console.log(error);
        }
    }
}
$(document).ready(function() {
    console.log('hlooooo');
    authorize.loginCheck();
    codeKataPage.init();
    input = {
        type: "conceptCardDetails"
    };
    authorize.ajax(input, "wecp2.0", function(data) {
        data = JSON.parse(data);
        if (data && data.overallData) {
            let obj = new codekataCards();
            obj.renderCards(data);
        }
    });
    manager.netEmail = authorize.getSession('mail') ? authorize.getSession("mail") : "";
    manager.netMobile = authorize.getSession('mobile') ? authorize.getSession("mobile") : "";
    manager.netName = authorize.getSession('cusername') ? authorize.getSession("cusername") : "";
});
$(document).on("click", ".up-lift", function(data) {
    $("#premiumPopup").modal("show");
});
$(document).on("click", '.topic-button', function(e) {
    e.preventDefault();
    let currentEl = $(e.currentTarget);
    let currentUrl = currentEl.attr("href");
    let currentTopic = currentEl.data("topic");
    try {
        authorize.smartTechCEEvent("topics_clicked", {
            practisename: "Codekata",
            topic_name: currentTopic
        }, {
            email: manager.netEmail,
            mobile: manager.netMobile,
            NAME: manager.netName
        });
    } catch (error) {
        console.log(error);
    }
    window.location.href = currentUrl;
});
const codeKataPage = (function codeKataPage() {
    const pageEl = '#code-kata-page';
    const conceptCard = '.concept-card';
    const initSkillSearch = () => {
        const searchInput = '#searchConcepts';
        const topicsContainer = 'ck-concepts-list';
        const topics = {
            valueNames: ['concept-topic'],
        };
        const topicsList = new List(topicsContainer, topics);
        $(searchInput).keyup(() => {
            const keyword = $(searchInput).val();
            topicsList.search(keyword);
        });
    };
    const highlightCurrentCard = () => {
        $(conceptCard).hover(function updateCard() {
            $(this).toggleClass('shadow');
        });
    };
    const init = () => {
        const thisPage = ($(pageEl).length !== 0);
        if (!thisPage) {
            return;
        }
        initSkillSearch();
        highlightCurrentCard();
    };
    return {
        init,
    };
}());

function share_modal_ck(id) {
    console.log('share');
    $('head').append('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">');
    var myElem = document.getElementById('shareModal');
    console.log('elem', myElem);
    if (myElem === null)
        $('body').append('<div class="modal " tabindex="-1" role="dialog" id="shareModal" aria-hidden="true"></div><script>function copy(){var copyText=$("#windowurl");copyText.select();document.execCommand("copy");}</script>');
    var url_share = window.location.href.split('#');
    var page_url = url_share[0] + "#" + id;
    var share_modal = '<div class="modal-dialog h-100 d-flex flex-column justify-content-center my-0 " role="document"><div class="modal-content"><div class="modal-header"><h5 class="modal-title">Share</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button></div><div class="post-share-modal modal-body"><div id="social"><a target="_blank" style="text-decoration: none;" href="https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent(page_url) + '" class="facebookBtn smGlobalBtn"></a><a target="_blank" style="text-decoration: none;" href="https://twitter.com/intent/tweet?text=' + page_url + '" data-size="large"class="twitterBtn smGlobalBtn"></a><a target="_blank" style="text-decoration: none;" href="https://www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(page_url) + '" class="linkedinBtn smGlobalBtn"></a></div><hr><div></input></div><div class="input-group mb-3"><input type="text" class="form-control form-rounded" id="windowurl" value="' + page_url + '"><div class="input-group-append"><span class="input-group-text" id="basic-addon2"><a href="javascript:copy();"><i class="fas fa-copy"></i></a></span></div></div></div><div class="modal-footer"><button type="button" class="btn btn-primary" data-dismiss="modal" style="color:white;">Close</button></div></div></div>';
    $("#shareModal").html(share_modal);
    $("#shareModal").modal('show');
}