// 模态框 start ---------------------------------------------------------------

// 同意或拒绝审核确认框
function auditSubmit(agree) {

    $('#delcfmModel').modal();
    return;
        //提交审核结果url
        var submitUrl = "companyLoanEx/submitAudit.html?agree="+agree;
        $('#submitUrl').val(submitUrl);//给会话中的隐藏属性URL赋值
        var flag = "";
        if (agree) {
            flag = " [通过] "
        } else {
            flag = " [拒绝] "
        }
        $('#delcfmMsg').html("您确认审核" + flag + "吗?")
        $('#delcfmModel').modal();
    }

// 提示框
 var showModal = function (title, text) {
        $("#modalTitle").html(title);
        $("#modalText").html(text);
        $("#myModal").modal();
    }
 
// 提交信息确认框
 function urlSubmit() {
        var submitUrl = $.trim($("#submitUrl").val());//获取会话中的隐藏属性URL
        // window.location.href = submitUrl;
        alert("使用ajax异步调用提交审核 url=" + submitUrl)
    }


// 模态框 end ---------------------------------------------------------------
