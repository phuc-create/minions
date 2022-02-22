import React from 'react'

type ColorsInfor = {
  button: {
    primary: string,
    secondary: string,
    success: string,
    error: string,
    warn: string
  },
  form: {
    background: string,
    shadow: string,
    input: {
      background: string,
      color: string
    }
  },
  noti: {
    success: string,
    error: string,
    warn: string
  }
}
interface ContextProps {
  children: React.ReactChild
}

// export const TodoContext = React.createContext({} as ContextType)
export const colorsInfor: ColorsInfor = {
  button: {
    primary: '#3498db',
    secondary: '#9b59b6',
    success: '#2ecc71',
    error: '#e74c3c',
    warn: '#f39c12'
  },
  form: {
    background: '#ffffff',
    shadow: '0 0 10px -4px rgba(0,0,0,0.2)',
    input: {
      background: '#f2f2f2',
      color: '#b3b3b3'
    }
  },
  noti: {
    success: '#2ecc71',
    error: '#e74c3c',
    warn: '#f1c40f'
  }
}

// export const CustomContext = (defaultValue: ColorsContext | null) => {
//   const Context = React.createContext(defaultValue || {} as ColorsContext)
//   function useCtx() {
//     const c = React.useContext(Context)
//     if (c === undefined) {
//       throw Error('Make sure provider wraped')
//     }
//     return c
//   }
//   return [useCtx, Context.Provider] as const
// }

// export const [useCtx, CtxProvider] = CustomContext(null)

// export const ContextProvider: React.FC<ContextProps> = ({ children }): JSX.Element => {
//   const [colors, setColors] = React.useState(colorsInfor)

//   React.useEffect(() => {
//     setColors(colorsInfor)
//   }, [])

//   const props = {
//     colors,
//   }

//   return (
//     <CtxProvider value={props}>
//       {children}
//     </CtxProvider>
//   )
// }

export const ColorsCtx = React.createContext<ColorsInfor>(colorsInfor)

export const ColorsProvider: React.FC<ContextProps> = ({ children }) => {
  const [cls, setCls] = React.useState<ColorsInfor>(colorsInfor)
  const { button, form, noti } = cls
  React.useEffect(() => {
    setCls(colorsInfor)
  }, [])

  const values: ColorsInfor = {
    button,
    form,
    noti
  }

  return (
    <ColorsCtx.Provider value={values}>
      {children}
    </ColorsCtx.Provider>
  )
}



