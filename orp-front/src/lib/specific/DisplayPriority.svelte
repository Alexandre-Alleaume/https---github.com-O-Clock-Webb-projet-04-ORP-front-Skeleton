<script>
import {lists} from "$assets/displayLists.js";
import {tools} from '$assets/tools.js'
export let priority;
const object = tools.findObjectFromID(lists.priorityList,priority);
</script>
<div class="{object.bgColor} p-1 h-full">&nbsp;</div>
