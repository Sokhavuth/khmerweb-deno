var episode = 0

const genJson = () => {
    const type = $('select[name="type"').val()
    const id = $('input[name="videoid"').val()
    const status = $('select[name="status"').val()
            
    var video = {
        type: type,
        id: id,
        status: status,
    }
        
    var success = false
    
    for(let v in video){
        if(video[v] === ''){
            alert('You need to fill the required field '+v)
            success = false
            break
        }else{
            success = true
        }
    }

    if(success){
        let json = $('input[name="video"]').val()
        video = {
            type: type,
            id: id,
            status: status,
        }
        if((json === '')){
            json = JSON.stringify([video])
            $('input[name="video"]').val(json)
        }else{
            json = JSON.parse(json)
            json.push(video)
            json = JSON.stringify(json)
            $('input[name="video"').val(json)
        }

        let html =``

        for(let v in video){
            html += `<input class="td${episode}" value="${video[v]}" required />`
        }

        html += `<p title="Delete" onClick="deleteRow(event)" class="episode">${++episode}</p>`
        html = `<div>${html}</div>`
        
        if($('.viddata div').html() === ''){
            $('.viddata div').append('<b>ប្រភេទ​</b>')
            $('.viddata div').append('<b>អត្តសញ្ញាណ​</b>')
            $('.viddata div').append('<b>ចប់ឬ​នៅ?</b>')
            $('.viddata div').append('<b>ភាគ/លុប</b>')
        }
        
        $('.viddata div:eq(0)' ).after(html)
    }
}

function submitform(){
    let videos = []
    let part = {}
    let key = {0:'type', 1:'id', 2:'status'}
    
    for(let v=1; v<=episode; v++){
        for(let j=0; j<3; j++){
            part[key[j]] = $(`.viddata div:eq(${v}) input:eq(${j})`).val()
        }

        videos.push({...part})
    }
    
    const json = JSON.stringify(videos)
    $('input[name="video"').val(json)

    document.forms["pform"].submit()
}

function deleteRow(e) {
    e.target.parentElement.remove()
    
    let index = parseInt(e.target.innerHTML)
    index = index - 1
    let json = $('input[name="video"]').val()
    json = JSON.parse(json)
    json.splice(index, 1)
    json = JSON.stringify(json)
    $('input[name="video"').val(json)

    episode -= 1
    for(let v=episode; v>-1; v--){
        $('.episode').eq(v).html(episode-v)
    }
}