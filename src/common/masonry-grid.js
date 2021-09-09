import MasonryItem from "./masonry-item";

function MasonryGrid(props) {
    console.log('mas props', props);
    return (
        <div className="d-ib w100pc">
            <div className="sp-container">
                <div className="flex-container">
                    <div className="flex-ci">
                    {
                        props.items
                            ?.filter((i, n) => n % 3 === 0)
                            ?.map((it, n) => 
                                <MasonryItem key={n}
                                    img={it.image} 
                                    date={it.date} 
                                    headline={it.title} 
                                    presenterUrl="#" 
                                    presenterName={it.author}/>
                            )
                    }
                    </div>
                    <div className="flex-ci">
                    {
                        props.items
                            ?.filter((i, n) => n % 3 === 1)
                            ?.map((it, n) => 
                                <MasonryItem key={n}
                                    img={it.image} 
                                    date={it.date} 
                                    headline={it.title} 
                                    presenterUrl="#" 
                                    presenterName={it.author}/>
                            )
                    }
                    </div>
                    <div className="flex-ci">
                    {
                        props.items
                            ?.filter((i, n) => n % 3 === 2)
                            ?.map((it, n) => 
                                <MasonryItem key={n}
                                    img={it.image} 
                                    date={it.date} 
                                    headline={it.title} 
                                    presenterUrl="#" 
                                    presenterName={it.author}/>
                            )
                    }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MasonryGrid;
