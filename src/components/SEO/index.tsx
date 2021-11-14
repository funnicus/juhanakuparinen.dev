
 import React from "react"
 import Head from "next/head"
 
 type MetaProps = JSX.IntrinsicElements["meta"]
 
 interface Props {
   description?: string
   lang?: string
   meta?: MetaProps[]
   title: string
 }
 
 const SEO: React.FC<Props> = ({ description, lang, title }) => {
 
   const metaDescription = description || "Homepage of Juhana Kuparinen!"
 
   return (
     <Head>
       <title>{title}</title>
       <meta name="description" content={metaDescription} />
       <meta name="lang" content={lang} />
    </Head>
   )
 }
 
 SEO.defaultProps = {
   lang: `en`,
   description: ``,
 }
 
 export default SEO