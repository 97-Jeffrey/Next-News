import { DUMMY_NEWS } from "@/dummy-news"
import { notFound } from "next/navigation";


export default function NewsIdPage({ params }){

    const newsSlug = params.slug;
    const newsItem = DUMMY_NEWS.find(eachNews=> eachNews.slug === newsSlug)

    if(!newsItem){
      notFound()
    }


    return (
        <article className='news-article'>
            <header>
                <img src={`/images/news/${newsItem.image}`} alt={newsItem.title}/>
                <h1>{newsItem.title} </h1>
                <time date={newsItem.date}>{newsItem.date}</time>
            </header>
            <p>{newsItem.content}</p>
            

        </article>
        
    )
}