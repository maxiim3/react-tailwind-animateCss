import './App.scss'
import {
   Switch,
   Route,
   Redirect,
   BrowserRouter,
   NavLink,
} from 'react-router-dom'
export default function App() {
   const pages = [
      ['Home', '/dashboard'],
      ['Team', '/team'],
      ['Projects', '/projects'],
      ['Reports', '/reports'],
   ]

   return (
      <main>
         <nav className="flex sm:justify-center space-x-4 bg-blue-100 py-2">
            {pages.map(([title, url]) => (
               <NavLink
                  key={url}
                  to={url}
                  id={'navAnimate'}
                  className="rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900 animate__animated"
               >
                  {title}
               </NavLink>
            ))}
         </nav>
         <Switch>
            {pages.map(([title, url]) => (
               <Route key={url} path={url} exact title={title}>
                  <h1
                     className={
                        'uppercase text-3xl text-center pt-16 animate__animated animate__fadeIn'
                     }
                  >
                     {title.split('').map((l, key) => (
                        <span
                           className={
                              `animate__animated animate__tada animate__delay-${key+1}s inline-block`
                           }
                        >
                          {l}
                        </span>
                     ))}
                  </h1>
                  <div
                     className={'pt-24 animate__animated animate__fadeInLeft'}
                  >
                     <p
                        className={
                           'w-1/2 text-justify mx-auto indent-12 leading-loose -tracking-wide'
                        }
                     >
                        Lorem ipsum dolor <strong>{title}</strong> amet,
                        consectetur adipisicing elit. Accusamus amet aut
                        consequatur corporis cupiditate dolorem doloremque
                        eaque, eius eligendi explicabo fugiat illum impedit ipsa
                        iusto magnam nostrum obcaecati officia placeat,
                        provident quae quas ratione repellat saepe tempore
                        temporibus tenetur voluptas voluptatem? Autem deserunt{' '}
                        <em>{url}</em> non omnis quod! Corporis, dolores,
                        perferendis.
                     </p>
                  </div>
               </Route>
            ))}
            <Redirect to={'/dashboard'} />
         </Switch>
      </main>
   )
}
