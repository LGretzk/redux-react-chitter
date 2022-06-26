function PeepForm() {
  return (
    <div>
      <form>
        <input type="text" name="message" placeholder="What's on your mind?"></input>
        <input type="hidden"></input>
        <button type="submit" value="submitPeep">Peep</button>
      </form>
    </div>
  );
}

export default PeepForm;