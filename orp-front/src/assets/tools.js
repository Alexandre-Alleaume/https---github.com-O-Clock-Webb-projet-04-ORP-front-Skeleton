export const tools = {
    findObjectFromID: function(list, value){
    const index = list.findIndex(x => x.id === value);
    return list[index];
},
    nl2br: function(string){
    return string.replace(/(?:\r\n|\r|\n)/g, '<br/>');
    }
};