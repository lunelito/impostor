type WordListElement = {
  title: string;
};

export default function WordListElement({ title }: WordListElement) {
  return (
    <div className="m-4 text-xl text-center rounded-2xl px-4 py-8 bg-surface-2/30 backdrop-blur-lg">
      <p>{title}</p>
    </div>
  );
}
