import useStyles from './style';

export function Lesson12() {
  const classes = useStyles();
  const text = "text";
  return (
    <div className={classes.root}>
      {text}
    </div>
  );
}
