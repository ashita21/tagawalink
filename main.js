function selectFile(filename){
    var selectorid = filename+"sel"
    var content = document.getElementsByClassName("contentpanel")
    resetSelectors()
    for(var i=0;i<content.length;i++){
        content.item(i).style.visibility = "hidden"
        if(content.item(i).id.localeCompare(filename) == 0){
            console.log(filename+": match found")
            console.log("selector: "+selectorid)
            content.item(i).style.visibility = "visible"
            document.getElementById(selectorid).className = "selectoractive"
        }
    }
}

function selectType(typename){
    var filepanels = document.getElementsByClassName("filebar")
    resetTypeSelectors()
    for(var i=0;i<filepanels.length;i++){
        filepanels.item(i).style.visibility = "hidden"
        if(filepanels.item(i).id.localeCompare(typename) == 0){
            console.log(typename+": match found")
            filepanels.item(i).style.visibility = "visible"
            document.getElementById(typename+"sel").className = "catselectoractive"
        }
    }
}

function resetTypeSelectors(){
    var allselectors = document.getElementsByClassName("catselectoractive")
    for(var i=0;i<allselectors.length;i++){
        allselectors.item(i).className = "catselector"
    }
}

function resetSelectors(){
    var allselectors = document.getElementsByClassName("selectoractive")
    for(var i=0;i<allselectors.length;i++){
        allselectors.item(i).className = "selector"
    }
}

function greentheme(){
    var theme = document.getElementById('theme')
    theme.href = "green.css"
}

function blacktheme(){
    var theme = document.getElementById('theme')
    theme.href = "black.css"
}