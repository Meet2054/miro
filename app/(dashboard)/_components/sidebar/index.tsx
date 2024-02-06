import { List } from './list';
import NewButton from './New-Button'

const Sidebar = () => {
  return (
    <aside className='h-full w-[60px] flex flex-col gap-y-4
     bg-blue-700 text-white z-[1] fixed p-3 left-0'>
      <List /> 
      <NewButton />
    </aside>
  )
}

export default Sidebar
