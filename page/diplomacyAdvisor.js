if (typeof zJS == "undefined") {
    zJS = {};
}

if (typeof zJS.Page == "undefined") {
    zJS.Page = {};
}

//Запускает все функции советника дипломатии
function startAllFunctions(){
	makeActiveLinks();
	addMembersTab();
	changeTabsText();
}

//Изменение названий закладок
function changeTabsText(){
	var tabs = ['.tab_diplomacyAdvisor', '.tab_diplomacyIslandBoard', '.tab_diplomacyTreaty', '.tab_diplomacyAlly'];
	var vals = [zJS.Lang.Messages, zJS.Lang.Agora, zJS.Lang.Treaty, zJS.Lang.Alliance];
	for(var i = 0; i < 4; i++){
		var tab = $(tabs[i])[0].innerText;
		console.log(tab);
		var oldTab = tab;
		tab = tab.substring(tab.indexOf('('), tab.length);
		if(tab == oldTab) tab = '';
		console.log(tab);
		$(tabs[i])[0].innerText = vals[i] + " " + tab;
	}
}

//Создание активных ссылок
function makeActiveLinks(){
	$('td.msgText').each(function(){
		this.innerHTML = this.innerHTML.replace(/<br>/gi, " $&"); //На случай если тег стоит сразу после ссылки, а такое часто бывает
		var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/gi
        var replace = "<a href=\"$&\" target=\"_blank\">$&</a>";
		this.innerHTML = this.innerHTML.replace(regexp, replace);
	});
}

//Добавление вкладки со списком игроков альянса
function addMembersTab(){
	$('#js_tab_diplomacyMembers').remove();
	var tabOnClick = "ajaxHandlerCall('?view=diplomacyAlly&listAllyMembers=1'); return false;"
	var allyTab = $('<li class="tab" id="js_tab_diplomacyMembers" onclick="' + tabOnClick + '"><b class="tab_diplomacyMembers">' + zJS.Lang.Ally_members + '</b></li>');
	$('ul.tabmenu').css('table-layout', 'inherit');
	$('ul.tabmenu').append(allyTab);
	if($('table#allyMemberList')[0] != null){
		var tabmenu = $('ul.tabmenu');
		$('li', tabmenu).each(function(){
			$(this).removeClass('selected');
			if(this.id == "js_tab_diplomacyAlly"){
				this.id = "js_tab_diplomacyAllyNotSelected"; //Небольшая хитрость чтобы вкладка не перепрыгивала во время переключения страниц
			}
		});
		$('li#js_tab_diplomacyMembers').addClass('selected');
	}
}

zJS.Page.diplomacyAdvisor = {
    init : function() {
        startAllFunctions()
    },

    refresh : function() {
        this.init();
    }
};

zJS.Page.diplomacyAdvisorArchiveOutBox = {
	init : function() {
        startAllFunctions()
	},
	
	refresh : function() {
		this.init();
	}
};

zJS.Page.diplomacyAdvisorArchive = {
	init : function() {
        startAllFunctions()
	},
	
	refresh : function() {
		this.init();
	}
};

zJS.Page.diplomacyAdvisorOutBox = {
	init : function() {
        startAllFunctions()
	},
	
	refresh : function() {
		this.init();
	}
};

zJS.Page.diplomacyIslandBoard = {
	init : function() {
        startAllFunctions()
	},
	
	refresh : function() {
		this.init();
	}
};

zJS.Page.diplomacyTreaty = {
	init : function() {
        startAllFunctions()
	},
	
	refresh : function() {
		this.init();
	}
};

zJS.Page.diplomacyAlly = {
	init : function() {
        startAllFunctions()
	},
	
	refresh : function() {
		this.init();
	}
};