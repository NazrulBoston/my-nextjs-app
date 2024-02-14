

const DynamicPage = ({ params, searchParams }) => {


    return (
 
        <div>
            <h1>
                This is dynamic routes: {params.id}
            </h1>
            <h2>
                Search by : {searchParams.category}

            </h2>
            <h2>
                Search by : {searchParams.price}
            </h2>
        </div>
    );
};

export default DynamicPage;