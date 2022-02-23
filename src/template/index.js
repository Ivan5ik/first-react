import useStyles from './style';

export function ChangeMe() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      Change me
    </div>
  );
}
