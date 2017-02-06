function calcProgress($type, $goal, $progress) {
    var $id = '';
    var $val = 0;
    if (Number($goal) != 0 && Number($progress) != 0) {
        $val = (Number($progress) / Number($goal)) * 100;
    }
    switch ($type) {
        case 'emergency':
            $id = 'balloon0_progress';
            $("#emer_goal").attr("placeholder", "$" + $goal);
            $("#emer_curr").attr("placeholder", "$" + $progress);
            break;
        case 'company_match':
            $id = 'balloon1_progress';
            $("#match_goal").attr("placeholder", $goal + "%");
            $("#match_curr").attr("placeholder", $progress + "%");
            break;
        case 'debt':
            $id = 'balloon2_progress';
            $("#" + $id).css("background-color", "red");
            $("#debt_goal").attr("placeholder", "$" + $goal);
            $("#debt_curr").attr("placeholder", "$" + $progress);
            break;
        case 'ira':
            $id = 'balloon3_progress';
            $("#ira_goal").attr("placeholder", "$" + $goal);
            $("#ira_curr").attr("placeholder", "$" + $progress);
            break;
        case 'company_max':
            $id = 'balloon4_progress';
            $("#max_goal").attr("placeholder", "$" + $goal);
            $("#max_curr").attr("placeholder", "$" + $progress);
            break;
        case 'savings':
            $id = 'balloon5_progress';
            $("#sav_goal").attr("placeholder", "$" + $goal);
            $("#sav_curr").attr("placeholder", "$" + $progress);
            break;
        case 'investing':
            $id = 'balloon6_progress';
            $("#inv_goal").attr("placeholder", "$" + $goal);
            $("#inv_curr").attr("placeholder", "$" + $progress);
            break;
    }
    fixCss($id, $val);
}

function fixCss($id, $pct) {
    $("#" + $id).css("width", $pct + "%");
}

function showHideUpdateDiv() {
    if ($("#updateButton").html() == "{ update }") {
        $("#data_input").slideDown();
        $("#updateButton").html("{ close }");
    } else {
        $("#data_input").slideUp();
        $("#updateButton").html("{ update }");
    }
}

function saveUpdate() {
    var $params = {};
    $("#data_input :input").each(function() {
        var $id = $(this).attr("id");
        var $val = $(this).val();
        $val = $val.replace(/\D/g, '');
        if ($val != '') {
            $params.$id = $val ;
        }
    });
    // push the function onto the array and make the ajax call
    $params.func = 'updateData';

    $.ajax({
        type: 'POST',
        url: $url,
        data: $params,
        success: function() {
            loadData();
        },
        error: function() {
            alert("There was a problem saving the data!");
        }
    });
}

function showLogin() {
    window.location.href = './login';
}

function showHome() {
    window.location.href = '/';
}

