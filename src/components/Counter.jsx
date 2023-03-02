// Can't do the object destruction in the Solid JS pattern.  It breaks the solid js Reactivity pattern.
export default function CounterX(props) {
  return (
    <div class="counter">
      {/* Call this as State value as functions */}
      <p>{props.counter}</p>
    </div>
  );
}
