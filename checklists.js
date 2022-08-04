const obs = window.obsstudio;

function cb2Promise()

const checklists = [
  {
    name: 'Pre-Stream',
    items: [
      {
        desc: 'Set scene to Big Text',
        actor: () => window.obsstudio.setCurrentScene('Big Text')
        checker: () => (window.obsstudio.getCurrentScene(scene => ))
      }
    ]
  }
]
