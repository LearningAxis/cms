import './App.css';
import { defineOneEntry } from 'oneentry'

const {Menus, Pages } = defineOneEntry('https://learningaxis.oneentry.cloud', {token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoieW91dHViZSIsInNlcmlhbE51bWJlciI6MSwiaWF0IjoxNzA4ODM3MzAwLCJleHAiOjE3NDAzNzMyODZ9.FTg2UWsVslqMHrInAnkuw6tTa1Xmb6rfUGekiH1JvMo', langCode:'my-langCode'})

const value = await Pages.getPages('en_US');
const svalue = await Menus.getMenusByMarker('menu');

function App() {

  console.log(value)
  let a = svalue.pages
  console.log(a)
  return (
    <>
    {a.map((menu)=>(<a href={menu.pageUrl} key={menu.id}>{menu.localizeInfos.title}</a>))}
    </>
  );
}

export default App;
