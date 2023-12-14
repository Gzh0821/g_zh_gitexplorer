const options = [
  { value: 'add', label: 'options.primary.add' },
  { value: 'commit', label: 'options.primary.commit' },
  { value: 'revert', label: 'options.primary.revert' },
  { value: 'initialize', label: 'options.primary.initialize' },
  { value: 'modify', label: 'options.primary.modify' },
  { value: 'show', label: 'options.primary.show' },
  { value: 'delete', label: 'options.primary.delete' },
  { value: 'compareCommits', label: 'options.primary.compareCommits' },
  { value: 'configure', label: 'options.primary.configure' },
  { value: 'clone', label: 'options.primary.clone' },
  { value: 'ignore', label: 'options.primary.ignore' },
  { value: 'rename', label: 'options.primary.rename' },
  { value: 'merge', label: 'options.primary.merge' },
  { value: 'squash', label: 'options.primary.squash' },
  { value: 'stash', label: 'options.primary.stash' },
  { value: 'debug', label: 'options.primary.debug' },
  { value: 'recover', label: 'options.primary.recover' },
  { value: 'synchronize', label: 'options.primary.synchronize' },
  { value: 'rebase', label: 'options.primary.rebase' },
  { value: 'cherrypick', label: 'options.primary.cherrypick' },
];

export const primaryOptions = options.sort((x, y) => {
  if (x.value < y.value) {
    return -1;
  }
  if (x.value > y.value) {
    return 1;
  }
  return 0;
});
