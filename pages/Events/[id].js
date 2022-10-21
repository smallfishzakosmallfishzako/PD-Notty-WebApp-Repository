import {client} from "../../libs/client"

export default function EventId({eventinfo}){
    function getStringFromDate(date) {
 
        let year_str = date.getFullYear();
        //月だけ+1すること
        let month_str = 1 + date.getMonth();
        let day_str = date.getDate();
        let hour_str = date.getHours();
        let minute_str = date.getMinutes();
        let second_str = date.getSeconds();
        
        
        let format_str = 'YYYY-MM-DD hh:mm:ss';
        format_str = format_str.replace(/YYYY/g, year_str);
        format_str = format_str.replace(/MM/g, month_str);
        format_str = format_str.replace(/DD/g, day_str);
        format_str = format_str.replace(/hh/g, hour_str);
        format_str = format_str.replace(/mm/g, minute_str);
        format_str = format_str.replace(/ss/g, second_str);
        
        return format_str;
       }

    return (
        <>
            <h1>{eventinfo.EventName}</h1>
            <p>{eventinfo.EventPlace}</p>
            <p>{eventinfo.EventOverView}</p>
            <p>{getStringFromDate(eventinfo.EventStartDate)}~{getStringFromDate(eventinfo.EventEndDate)}</p>
            <div
                dangerouslySetInnerHTML={{html: `${blog.body}`,}} />
        </>
    )
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "eventinfo" });

  const paths = data.contents.map((content) => `/Events/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "eventinfo", contentId: id });

  return {
    props: {
      eventinfo: data,
    },
  };
};