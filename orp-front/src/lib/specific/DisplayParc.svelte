<script>
import {lists} from "$assets/displayLists.js";
import {tools} from '$assets/tools.js'
export let parc;
const object = tools.findObjectFromID(lists.parcList,parc);
</script>
<p>{object.text}</p>
