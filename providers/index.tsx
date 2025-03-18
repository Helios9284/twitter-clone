import { ThemeProvider as NextThemesProvider } from "next-themes";
 import {NextAuthProvider} from "@/providers/next-auth-provider";
 import {ReactQueryProvider} from "@/providers/react-query-provider";
 import ModeToggle from "@/components/ui/modeToggle";
 import { ThemeProviderProps } from "next-themes/dist/types";
 
  
 export function AppProviders({ children, ...props }: ThemeProviderProps) {
   return (
    
     <NextThemesProvider {...props}>
        {/* SessionProvider */}
       <NextAuthProvider>
         {/* QueryClientProvider  and ReactQueryDevtools */}
         <ReactQueryProvider>
           {children}
         </ReactQueryProvider>
       </NextAuthProvider>
     </NextThemesProvider>
   );
 }