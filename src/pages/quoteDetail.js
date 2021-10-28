import { useParams ,Route} from "react-router";
import Comment from '../components/comments/Comments';
const QuoteDeatail=()=>{
    let params=useParams();
return(
    <>
    <h1>quote details page {params.quoteId}</h1>
    <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comment/>
    </Route>
</>
)
}
export default QuoteDeatail