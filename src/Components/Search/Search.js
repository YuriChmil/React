import './Seacrh.css';
import TodoADD from '../List/TodoADD.js';

const filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }
  
    return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
    });
  };
  const posts = [
    { id: '1', name: 'test1' },
    { id: '2', name: 'test2' },
    { id: '3', name: 'test3!' },
    { id: '4', name: 'test4' },
  ];
  
 
  const Search = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const filteredPosts = filterPosts(posts, query);
    return (
      <div>
        <SearchBar />
        <ul>
                  {filteredPosts.map((post) => (
                      <li key={post.id}>{post.name}</li>
                  ))}
              </ul>
        </div>
    );
  }
  const SearchBar = () => (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search Contact</span>
        </label>
        <input
            type="text"
            id="header-search"
            placeholder="Search Contact"
            name="s" 
        />
        <button type="submit">Search</button>
    </form>
  );
  
export default Search;
