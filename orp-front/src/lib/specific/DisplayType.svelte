<script>
import {lists} from "$assets/displayLists.js";
import {tools} from '$assets/tools.js'
export let type;
const object = tools.findObjectFromID(lists.typeList,type);
</script>
<p>{object.text}</p>
