import PaginationItem from './PaginationItem';

const Pagination = ({index, onSelectedItem, totalPages}) => {

    //const perPage = 10;
    //const totalPages = 145;
    //var index = 1;

    var currentSet = [];
    var firstOnSet = index - 2;
    var lastOnSet = index + 2;


    const sortItems = () => {

        var set =  [];

        if(index < 7)
        {
            firstOnSet = 1;
            lastOnSet = 7;
        }

        

        for (let i = firstOnSet - 1; i < 7 || (i < totalPages && index >= 7); i++) {

            if(i + 1 > totalPages) {
                break;
            }
            
            if(set.length === 5 && i > 7)
            {
                break;
            }

            set.push(i + 1);
        }

        lastOnSet = set[set.length - 1];
        currentSet = set;
    }

    sortItems();
    
    return(
        <div className="flex justify-center">

            <div className="flex mt-3 mx-auto py-4">
                {
                    index > 1 ? (
                        <PaginationItem onSelectedItem={onSelectedItem} index={index}  term="<" previus/>
                    ): (
                        <PaginationItem onSelectedItem={onSelectedItem} disabled index={index}  term="<" previus/>
                    )
                }
                
                
                { index >= 7 ? (
                    <>
                    <PaginationItem onSelectedItem={onSelectedItem} term={1} index={index}/>
                    <PaginationItem onSelectedItem={onSelectedItem} term={2}  index={index}/>
                    <PaginationItem onSelectedItem={onSelectedItem} term="..." disabled />
                    </>
                ): null }

                {
                    currentSet.map((item) => {
                        return (
                            <PaginationItem onSelectedItem={onSelectedItem} term={item} index={index} key={`pag_${item}`}/>
                        )
                    })
                }

                <PaginationItem  term="..." disabled />
                {
                    totalPages >= 2 && <PaginationItem onSelectedItem={onSelectedItem} term={totalPages - 1} />
                }
                <PaginationItem onSelectedItem={onSelectedItem} term={totalPages} />

                {
                    index < totalPages ? (
                        <PaginationItem onSelectedItem={onSelectedItem} index={index} next  term=">" />
                    ): (
                        <PaginationItem onSelectedItem={onSelectedItem} index={index} next disabled  term=">" />
                    )
                }
                
            </div>
        </div>
    )
}

export default Pagination;