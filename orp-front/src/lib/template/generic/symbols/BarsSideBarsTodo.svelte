<script>
export let content;
</script>

<div class="BarsSideBarsTodo w-60 h-96 relative">
  <div class="Bg w-60 h-96 left-0 top-0 absolute">
    <div class="Bg w-60 h-96 left-0 top-0 absolute bg-gray-800"></div>
    <div class="White w-60 h-96 left-0 top-0 absolute">
      <div class="Rectangle w-60 h-96 left-0 top-0 absolute bg-white"></div>
    </div>
  </div>
  <div class="Tags w-20 h-64 left-[24px] top-[498px] absolute">
    <div class="Tags left-0 top-0 absolute text-slate-400 text-base font-medium uppercase">TAGS</div>
    <div class="Project w-20 h-4 left-[2px] top-[42px] absolute">
      <div class="Project left-[26px] top-0 absolute text-slate-600 text-base font-medium capitalize">Project</div>
      <div class="Checkbox w-3 h-3 left-0 top-[3px] absolute bg-rose-500 rounded-full"></div>
      <div class="Red w-3 h-3 left-0 top-[3px] absolute">
        <div class="Rectangle w-3 h-3 left-0 top-0 absolute bg-rose-500"></div>
      </div>
    </div>
    <div class="Meeting w-20 h-4 left-[2px] top-[90px] absolute">
      <div class="Frontend left-[26px] top-0 absolute text-slate-600 text-base font-medium capitalize">Frontend</div>
      <div class="Checkbox w-3 h-3 left-0 top-[3px] absolute bg-rose-500 rounded-full"></div>
      <div class="Blue-200 w-3 h-3 left-0 top-[3px] absolute">
        <div class="Rectangle w-3 h-3 left-0 top-0 absolute bg-cyan-400"></div>
      </div>
    </div>
    <div class="Event w-20 h-4 left-[2px] top-[138px] absolute">
      <div class="Backend left-[26px] top-0 absolute text-slate-600 text-base font-medium capitalize">Backend</div>
      <div class="Checkbox w-3 h-3 left-0 top-[3px] absolute bg-rose-500 rounded-full"></div>
      <div class="Yellow w-3 h-3 left-0 top-[3px] absolute">
        <div class="Rectangle w-3 h-3 left-0 top-0 absolute bg-orange-300"></div>
      </div>
    </div>
    <div class="Work w-16 h-4 left-[2px] top-[186px] absolute">
      <div class="Issue left-[26px] top-0 absolute text-slate-600 text-base font-medium capitalize">Issue</div>
      <div class="Checkbox w-3 h-3 left-0 top-[3px] absolute bg-rose-500 rounded-full"></div>
      <div class="Green w-3 h-3 left-0 top-[3px] absolute">
        <div class="Rectangle w-3 h-3 left-0 top-0 absolute bg-emerald-500"></div>
      </div>
    </div>
    <div class="Other w-16 h-4 left-[2px] top-[234px] absolute">
      <div class="Work left-[26px] top-0 absolute text-slate-600 text-base font-medium capitalize">Work</div>
      <div class="Checkbox w-3 h-3 left-0 top-[3px] absolute bg-rose-500 rounded-full"></div>
      <div class="Orange w-3 h-3 left-0 top-[3px] absolute">
        <div class="Rectangle w-3 h-3 left-0 top-0 absolute bg-orange-400"></div>
      </div>
    </div>
  </div>
  <div class="BarsSideBarsComponentsMenuButton w-60 h-12 left-0 top-[410px] absolute">
    <div class="Bg w-60 h-12 left-0 top-0 absolute bg-gray-900"></div>
    <div class="Deleted left-[53px] top-[15px] absolute text-slate-600 text-base font-medium">Deleted</div>
    <div class="IconDelete w-5 h-5 left-[21px] top-[13px] absolute">
      <div class="IconDelete w-3.5 h-4 left-[4px] top-[3px] absolute">
      </div>
      <div class="IconDelete w-3.5 h-4 left-[4px] top-[3px] absolute">
      </div>
      <div class="Green-300 w-5 h-5 left-0 top-0 absolute">
        <div class="Rectangle w-5 h-5 left-0 top-0 absolute bg-slate-300"></div>
      </div>
    </div>
  </div>
  <div class="BarsSideBarsComponentsMenuButton w-60 h-12 left-0 top-[362px] absolute">
    <div class="Bg w-60 h-12 left-0 top-0 absolute bg-gray-900"></div>
    <div class="Done left-[53px] top-[15px] absolute text-slate-600 text-base font-medium">Done</div>
    <div class="IconStatus w-5 h-5 left-[21px] top-[13px] absolute">
      <div class="Green-300 w-5 h-5 left-0 top-0 absolute">
        <div class="Rectangle w-5 h-5 left-0 top-0 absolute bg-slate-300"></div>
      </div>
    </div>
  </div>
  <div class="BarsSideBarsComponentsMenuButton w-60 h-12 left-0 top-[314px] absolute">
    <div class="Bg w-60 h-12 left-0 top-0 absolute bg-gray-900"></div>
    <div class="Today left-[53px] top-[15px] absolute text-slate-600 text-base font-medium">Today</div>
    <div class="IconCalendar w-5 h-5 left-[21px] top-[13px] absolute">
      <div class="Green-300 w-5 h-5 left-0 top-0 absolute">
        <div class="Rectangle w-5 h-5 left-0 top-0 absolute bg-slate-300"></div>
      </div>
    </div>
  </div>
  <div class="BarsSideBarsComponentsMenuButton w-60 h-12 left-0 top-[266px] absolute">
    <div class="Bg w-60 h-12 left-0 top-0 absolute bg-gray-900"></div>
    <div class="Sheduled left-[53px] top-[15px] absolute text-slate-600 text-base font-medium">Sheduled</div>
    <div class="IconClock w-5 h-5 left-[21px] top-[13px] absolute">
      <div class="Green-300 w-5 h-5 left-0 top-0 absolute">
        <div class="Rectangle w-5 h-5 left-0 top-0 absolute bg-slate-300"></div>
      </div>
    </div>
  </div>
  <div class="BarsSideBarsComponentsMenuButton w-60 h-12 left-0 top-[218px] absolute">
    <div class="Bg w-60 h-12 left-0 top-0 absolute bg-gray-900"></div>
    <div class="Priority left-[53px] top-[15px] absolute text-slate-600 text-base font-medium">Priority</div>
    <div class="IconDetail w-5 h-5 left-[21px] top-[13px] absolute">
      <div class="Green-300 w-5 h-5 left-0 top-0 absolute">
        <div class="Rectangle w-5 h-5 left-0 top-0 absolute bg-slate-300"></div>
      </div>
    </div>
  </div>
  <div class="BarsSideBarsComponentsMenuButton w-60 h-12 left-0 top-[170px] absolute">
    <div class="Bg w-60 h-12 left-0 top-0 absolute bg-gray-900"></div>
    <div class="Starred left-[53px] top-[15px] absolute text-slate-600 text-base font-medium">Starred</div>
    <div class="IconStar w-5 h-5 left-[21px] top-[13px] absolute">
      <div class="Green-300 w-5 h-5 left-0 top-0 absolute">
        <div class="Rectangle w-5 h-5 left-0 top-0 absolute bg-slate-300"></div>
      </div>
    </div>
  </div>
  <div class="BarsSideBarsComponentsMenuButton w-60 h-12 left-0 top-[64px] absolute">
    <div class="Bg w-60 h-12 left-0 top-0 absolute">
      <div class="Bg w-60 h-12 left-0 top-0 absolute bg-gray-900"></div>
      <div class="White-200 w-60 h-12 left-0 top-0 absolute">
        <div class="Rectangle w-60 h-12 left-0 top-0 absolute bg-gray-50"></div>
      </div>
    </div>
    <div class="ActiveLine w-1 h-12 left-0 top-0 absolute">
      <div class="Bg w-1 h-12 left-0 top-0 absolute bg-sky-500 rounded-tr rounded-br"></div>
      <div class="Blue-300 w-1 h-12 left-0 top-0 absolute">
        <div class="Rectangle w-1 h-12 left-0 top-0 absolute bg-sky-500"></div>
      </div>
    </div>
    <div class="AllTasks left-[53px] top-[15px] absolute text-slate-600 text-base font-medium">All Tasks</div>
    <div class="IconTodo w-5 h-5 left-[21px] top-[13px] absolute">
      <div class="Green-300 w-5 h-5 left-0 top-0 absolute">
        <div class="Rectangle w-5 h-5 left-0 top-0 absolute bg-slate-300"></div>
      </div>
    </div>
  </div>
  <div class="ButtonsBasicPrimaryHoverIcon w-32 h-10 left-[55px] top-[12px] absolute">
    <div class="Bg w-32 h-10 left-0 top-0 absolute">
      <div class="Bg w-32 h-10 left-0 top-0 absolute bg-sky-500 rounded"></div>
      <div class="Blue-300 w-32 h-10 left-0 top-0 absolute">
        <div class="Rectangle w-32 h-10 left-0 top-0 absolute bg-sky-500"></div>
      </div>
    </div>
    <div class="AddTask left-[44px] top-[11px] absolute text-white text-base font-medium capitalize">Add Task</div>
    <div class="IconPlus w-4 h-4 left-[22px] top-[12px] absolute">
      <img class="IconPlus w-3 h-3 left-[2.19px] top-[2.18px] absolute" src="https://via.placeholder.com/12x12" />
      <img class="IconPlus w-3 h-3 left-[2.18px] top-[2.18px] absolute" src="https://via.placeholder.com/12x12" />
      <div class="White w-4 h-4 left-0 top-0 absolute">
        <div class="Rectangle w-4 h-4 left-0 top-0 absolute bg-white"></div>
      </div>
    </div>
  </div>
  <div class="Filters left-[24px] top-[141px] absolute text-slate-400 text-base font-medium uppercase">Filters</div>
  <div class="Divider w-96 h-px left-[240px] top-[1024px] absolute origin-top-left -rotate-90">
    <div class="Divider w-96 h-px left-0 top-0 absolute bg-white"></div>
    <div class="Green-400 w-96 h-px left-0 top-0 absolute">
      <div class="Rectangle w-96 h-px left-0 top-0 absolute bg-slate-200"></div>
    </div>
  </div>
</div>
