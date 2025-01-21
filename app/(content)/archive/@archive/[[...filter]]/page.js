import NewsList from "@/components/news-list"
import { getAvailableNewsMonths, getAvailableNewsYears, getMonths, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";

export default function FilteredNewsPage({ params }){
    const filter = params.filter;

    const selectedYear = filter?.[0]
    const selectedMonth = filter?.[1]

    let news;
    let links  = getAvailableNewsYears()
    let newsContent = <p>No Available News at selected period</p>

    if(selectedYear && !selectedMonth){
        news = getNewsForYear(selectedYear)
        links = getAvailableNewsMonths(selectedYear)
    }

    if(selectedYear && selectedMonth){
        news = getNewsForYearAndMonth(selectedYear, selectedMonth)
        links=[]
    }

    if(news && news.length>0){
        newsContent = <NewsList news={news} />
    }

    if((selectedYear && !getAvailableNewsYears().includes(+selectedYear))
        ||
       (selectedMonth && !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
    ){
       throw new Error('Invalid Filter')
    }


    return (
        <>
            <header id='archive-header'>
                <nav>
                    <ul>
                        {
                            links.map((link)=>{
                                const href = selectedYear? 
                                `/archive/${selectedYear}/${link}`:
                                `/archive/${link}`
                                return (
                                    <li key={link}>
                                        <Link href={href}>{selectedYear? getMonths(link): link}</Link>
                                    </li>

                                )
                            
                            })
                        }

                    </ul>
                </nav>

            </header>
            {newsContent}
        </>
    )
}