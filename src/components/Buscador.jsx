const Search = ({buscar,searchHandle}) => {

    return(
        <>
        <form>
            <input 
             id="buscador"
             type="search" 
             className="form-control my-3"
             placeholder="Buscar un colaborador"
             value={buscar}
             onChange={searchHandle}
            />

        </form>
        
        </>
    )
}
export default Search;