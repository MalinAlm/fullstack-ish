function PostForm() {
  return (
    <>
      <div>
        <form action="http://localhost:3000/" method="POST">
          <label>Name</label>
          <input type="text" name="name" required />
          <label>Category</label>
          <input type="text" name="category" required />
          <label>Price sek</label>
          <input type="text" name="price" required />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
export default PostForm;
