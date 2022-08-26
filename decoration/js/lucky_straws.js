var startBtn = document.getElementById('start-button');
var cancelBtn = document.getElementById('cancel-button');

function onlySpaces(str) {
    return str.trim().length === 0;
  }

function showResult() {
    var result = document.getElementById('result-list')
    var opacityLevel = window.getComputedStyle(document.getElementById("result-list")).getPropertyValue('opacity')
    if (opacityLevel == '0'){
        result.style.display = 'block'
        setTimeout(function(){
            result.style.opacity = 1
        },0)
    }
    else{
        
    }
}

function postAnswer() {
    var name = document.getElementById('name').value;
    var sex = document.getElementById('sex').value;
    var birthDate = document.getElementById('birth-date').value;
    var question = document.getElementById('question').value;
    var nameWarning = document.getElementsByClassName('name-warning');
    var sexWarning = document.getElementsByClassName('sex-warning');
    var dateWarning = document.getElementsByClassName('birth-date-warning');
    var questionWarning = document.getElementsByClassName('question-warning');
    var isnum = /^\d+$/.test(birthDate);

    //variable from reusult form
    var resultGreeting = document.getElementById('result-greeting');
    var resultQuestion = document.getElementById('result-question');
    var resultScore = document.getElementById('result-score');
    var resultScoreIntro = document.getElementById('result-score-intro');
    var resultNumber = document.getElementById('result-number');

    //variable ready to add in innerHTML
    var name_output  = null
    var sex_output = null
    var birthDate_output = null
    var question_output = null

    // Buttons



    resultGreeting.innerHTML = ''
    resultQuestion.innerHTML = ''
    resultScore.innerHTML = ''
    resultScoreIntro.innerHTML = ''
    resultNumber.innerHTML = ''


    if (true){

        // Check the condition of names
        if (onlySpaces(name)) {
            document.getElementById("name-section").innerHTML += "<p class='name-warning' style='color:red;'>請輸入正確的姓名</p>";
            while (nameWarning.length > 1) nameWarning[0].remove();
        }else{
            if (nameWarning.length != 0){
                nameWarning[0].remove()
                name_output = name
            }else{
                name_output = name
            }
        }
    
        // Check the condition of birth date
        if (onlySpaces(birthDate)) {
            document.getElementById("birth-date-section").innerHTML += "<p class='birth-date-warning' style='color:red;'>請輸入您的出生日期</p>";
            while (dateWarning.length > 1) dateWarning[0].remove();
        }

        else if(isnum != true){
            document.getElementById("birth-date-section").innerHTML += "<p class='birth-date-warning' style='color:red;'>請輸入正確的數字格式</p>";
            while (dateWarning.length > 1) dateWarning[0].remove();
        }
        
        else if(birthDate.toString().length != 4){
            document.getElementById("birth-date-section").innerHTML += "<p class='birth-date-warning' style='color:red;'>請輸入正確的日期</p>";
            while (dateWarning.length > 1) dateWarning[0].remove();
        }
        
        else if(birthDate.toString()[0] != 1 && birthDate.toString()[0] != 0){
            document.getElementById("birth-date-section").innerHTML += "<p class='birth-date-warning' style='color:red;'>請輸入正確的月份</p>";
            while (dateWarning.length > 1) dateWarning[0].remove();
        }

        else if(birthDate.toString()[0] == 1 && birthDate.toString()[1] > 2){
            document.getElementById("birth-date-section").innerHTML += "<p class='birth-date-warning' style='color:red;'>請輸入正確的月份</p>";
            while (dateWarning.length > 1) dateWarning[0].remove();
        }

        else if(birthDate.toString()[0] == 0 && birthDate.toString()[1] == 0){
            document.getElementById("birth-date-section").innerHTML += "<p class='birth-date-warning' style='color:red;'>請輸入正確的月份</p>";
            while (dateWarning.length > 1) dateWarning[0].remove();
        }

        else if(birthDate.toString()[2] == 3 && birthDate.toString()[3] > 1){
            document.getElementById("birth-date-section").innerHTML += "<p class='birth-date-warning' style='color:red;'>請輸入正確的日期數字</p>";
            while (dateWarning.length > 1) dateWarning[0].remove();
        }

        else if(birthDate.toString()[2] > 3){

            document.getElementById("birth-date-section").innerHTML += "<p class='birth-date-warning' style='color:red;'>請輸入正確的日期數字</p>";
            while (dateWarning.length > 1) dateWarning[0].remove();
        }
        
        else{
            if (dateWarning.length != 0){
                dateWarning[0].remove()  
                birthDate_output = birthDate
            }else{
                birthDate_output = birthDate
            }
        }

        // Check the condition of gender
        if (sex == '' || sex == null) {
            document.getElementById("sex-section").innerHTML += "<p class='sex-warning' style='color:red;'>請選擇您的性別</p>";
            while (sexWarning.length > 1) sexWarning[0].remove();
        }else{
            if (sexWarning.length != 0){
                sexWarning[0].remove()
                sex_output = sex
            }else{
                sex_output = sex
            }
        }

        // Check the condition of question
        if (onlySpaces(question)) {
            document.getElementById("question-section").innerHTML += "<p class='question-warning' style='color:red;'>請輸入您的困擾</p>";
            while (questionWarning.length > 1) questionWarning[0].remove();
        }else{
            if (questionWarning.length != 0){
                questionWarning[0].remove()
                question_output = question
            }else{
                question_output = question
            }
        }


    }


    if(name_output != null && sex_output != null && birthDate_output != null && question_output != null){

        if (sex_output == 'male'){
            sex_output = '先生'
        }else{
            sex_output = '小姐'
        }

        var unique_num = Math.abs((birthDate_output[0]+birthDate_output[1]) - (birthDate_output[2]+birthDate_output[3]));
        const fortuneResult_random = ['大吉','小吉','吉','凶','小兇','大凶'];
        var random_title = fortuneResult_random[Math.floor(Math.random()*fortuneResult_random.length)];
        const fortuneResult = {
            '大吉':[
                name_output+sex_output+'您在此事的處理上有很大的機會可以成功，但請您還是要注意小細節，以免一失足成千古恨。',
                '恭喜'+name_output+sex_output+'，只要照著現在的步調走，極有可能在近期水到渠成！',
                '事情如同成熟的稻子，快可以收割了，也切勿過於心急。',
            ],
            '小吉':[
                '事情正在往好的方向發展，持之以恆的努力可以讓你更上一層樓！',
                '努力不懈的用心最終會帶領你往更好的地方走，繼續加油，帶著樂觀繼續前進。',
                '多多對自己好一點，適度的喘息可以或許可以獲得意想不到的益處，喘口氣再前進吧！',
            ],
            '吉':[
                '雖說事情正在向正確的方向發展，但仍然需要注意自己是否有無怠惰之心，須謹慎行事。',
                '近期內如果天時地利人和，事情會慢慢漸入佳境，但是依舊需要對自己的事情多上心才能保證事情順利。',
                '關於'+name_output+sex_output+'的煩憂，只要有恆心，好事就有可能降臨到您的身上，請您放心。',
            ],
            '凶':[
                name_output+sex_output+'近期可能遭遇到挫折與困難，但是不用擔心，但是只要靠著努力，必定人定勝天',
                '目前的情形雖然說不上好，但是透過努力一定可以逆轉的，切勿放棄',
                name_output+sex_output+'必須多多的盡心盡力，才能讓事情盡善盡美，否則可能會慢慢地失敗',
            ],
            '小兇':[
                '事情似乎看上去不如預期的那麼好，'+name_output+sex_output+'有可能在這段時間碰上一些挫折，但是不要擔心，盡力而為即可，不需要給自己太大的壓力',
                '想必事情並不是很順利，未來也將面臨重重考驗，但是請'+name_output+sex_output+'不要放棄，事情依然會有轉機',
                '或許日子跟煩惱不這麼順心如意，但請'+name_output+sex_output+'不要氣餒，請繼續為了理想與未來打拚！',
            ],
            '大凶':[
                '相信'+name_output+sex_output+'未來可能會面臨到一些困難的挑戰，但是請不要放棄希望，未來的路還很長，請持續保持信心，有信心與努力才能看到未來的轉機！',
                '未來的旅途可能會有很多未知的高牆與挑戰，'+name_output+sex_output+'不得不謹慎應對才是，小心駛得萬年船，耐心的祈禱並努力的度過每一天吧！',
                '不久的將來或許會很辛苦，但是請'+name_output+sex_output+'相信自己的能力，俗話說機會是留給準備好的人，隨時做好準備，就不怕輸給命運',
            ],
        };
        var random_intro = fortuneResult[random_title][Math.floor(Math.random()*random_title.length)];
        


        unique_num = unique_num.toString()

        // resultGreeting.innerHTML = ''
        // resultQuestion.innerHTML = ''
        // resultScore.innerHTML = ''
        // resultScoreIntro.innerHTML = ''
        // resultNumber.innerHTML = ''

        if(unique_num.length == 2){
            unique_num = Math.abs(unique_num[0]-unique_num[1])
        }

        if (unique_num == 0){
            unique_num = 6
        }

        resultGreeting.innerHTML += name_output + sex_output + '您好';
        resultQuestion.innerHTML += question_output;
        resultNumber.innerHTML += unique_num;
        resultScore.innerHTML += random_title;
        resultScoreIntro.innerHTML += random_intro;

        showResult()
        startBtn.disabled = true;
        cancelBtn.disabled = true;

        
    }
}

function restartTest(){
    var result = document.getElementById('result-list')
    var opacityLevel = document.getElementById("result-list").style.opacity
    if (opacityLevel == '1'){
        setTimeout(function(){
            result.style.opacity = 0 
        },0)

        setTimeout(function(){
            result.style.display = 'none'
        },1600)
        
    }
    else{
        
    }
    startBtn.disabled = false;
    cancelBtn.disabled = false;
    document.getElementById("input-form").reset();
}

document.getElementById('start-button').addEventListener('click',postAnswer)
document.getElementById('restart-button').addEventListener('click',restartTest)
