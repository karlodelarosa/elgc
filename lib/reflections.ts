export const reflections = [
  {
    text: [
      'God is present even when life feels unclear.',
      'Confusion does not mean God is absent from your situation.',
    ],
    spiritualInsight: [
      'God often leads step by step, not all at once.',
      'Faith grows when clarity is not fully given yet.',
    ],
    actions: [
      'Pray before making decisions today',
      'Acknowledge God in your confusion',
      'Take only the next right step',
    ],
  },

  {
    text: [
      'Weariness does not disqualify you from serving God.',
      'Even strong believers experience exhaustion.',
    ],
    spiritualInsight: [
      'God renews strength, not just motivation.',
      'Rest is part of spiritual obedience.',
    ],
    actions: [
      'Pause and rest without guilt',
      'Ask God for renewed strength',
      'Do not carry everything alone',
    ],
  },

  {
    text: [
      'God is not ignoring your silent prayers.',
      'Even when nothing changes, He is still working.',
    ],
    spiritualInsight: [
      "Delay is not denial in God's timing.",
      'God is shaping you while you wait.',
    ],
    actions: [
      'Trust God even without answers',
      'Continue praying consistently',
      'Avoid giving up in silence',
    ],
  },

  {
    text: ['Anxiety does not control your future.', 'God already holds tomorrow in His hands.'],
    spiritualInsight: [
      'Worry is misplaced trust in yourself instead of God.',
      'Peace comes from surrender, not control.',
    ],
    actions: [
      'Surrender your worries to God',
      'Limit overthinking today',
      'Refocus on what you can obey now',
    ],
  },

  {
    text: ['God sees your hidden sacrifices.', 'Nothing done for Him is wasted.'],
    spiritualInsight: [
      'Faithfulness matters more than visibility.',
      'God rewards what people overlook.',
    ],
    actions: [
      'Serve faithfully even unnoticed',
      'Avoid bitterness in service',
      'Trust God sees your effort',
    ],
  },

  {
    text: ['You are not alone in your struggle.', 'God remains near in your hardest moments.'],
    spiritualInsight: [
      'Isolation is a feeling, not a truth.',
      "God's presence does not depend on emotions.",
    ],
    actions: [
      'Talk to God honestly today',
      'Reach out to someone you trust',
      'Reject lies of isolation',
    ],
  },

  {
    text: ['God is shaping you through this season.', 'Even difficulty has divine purpose.'],
    spiritualInsight: [
      'Growth often happens in discomfort.',
      'God uses seasons, not just moments.',
    ],
    actions: [
      'Ask God what He is teaching you',
      'Stay patient in difficulty',
      'Keep walking in obedience',
    ],
  },

  {
    text: ['Your weakness is not the end of your calling.', 'God’s power is revealed in weakness.'],
    spiritualInsight: [
      'Dependence on God is strength, not failure.',
      'God works through surrendered hearts.',
    ],
    actions: [
      'Admit your weakness to God',
      'Stop pretending to be strong',
      'Rely on His strength today',
    ],
  },

  {
    text: ['God is not late in your life.', 'His timing is always intentional.'],
    spiritualInsight: [
      'Delay often prepares character.',
      'God’s timing protects you from wrong timing.',
    ],
    actions: ['Trust God’s timing', 'Avoid rushing decisions', 'Stay faithful in waiting'],
  },

  {
    text: [
      'Peace is found in God, not circumstances.',
      'Your environment does not control your peace.',
    ],
    spiritualInsight: ['True peace is spiritual, not situational.', 'God sustains peace in chaos.'],
    actions: ['Pray when anxious', 'Refocus your thoughts on God', 'Speak peace over your mind'],
  },

  // --- continue pattern for remaining 20 ---

  {
    text: ['God is working even when you cannot see it.', 'Hidden seasons are still holy seasons.'],
    spiritualInsight: [
      'God often works behind the scenes.',
      'Faith grows without visible evidence.',
    ],
    actions: ['Trust God without seeing results', 'Stay consistent in faith', 'Do not quit early'],
  },

  {
    text: ['You are still being formed by God.', 'Your story is not finished yet.'],
    spiritualInsight: [
      'God is more focused on who you become.',
      'Process matters more than speed.',
    ],
    actions: ['Be patient with your growth', 'Stop comparing yourself', 'Stay obedient daily'],
  },

  {
    text: ['God is your strength in exhaustion.', 'He does not abandon the weary.'],
    spiritualInsight: ['God sustains what He calls you to do.', 'Rest is spiritual alignment.'],
    actions: ['Rest intentionally', 'Ask for strength in prayer', 'Slow down today'],
  },

  {
    text: ['God understands your emotional battles.', 'You can be honest before Him.'],
    spiritualInsight: [
      'God welcomes honesty, not perfection.',
      'Healing starts with transparency.',
    ],
    actions: ['Pray honestly', 'Express your feelings to God', 'Stop hiding emotions'],
  },

  {
    text: ['God is guiding you even in silence.', 'Stillness does not mean abandonment.'],
    spiritualInsight: ['God speaks even in quiet seasons.', 'Silence is sometimes instruction.'],
    actions: ['Spend quiet time with God', 'Listen in prayer', 'Avoid noise and distraction'],
  },

  {
    text: ['Faith is built in daily obedience.', 'Small steps matter to God.'],
    spiritualInsight: ['Consistency forms spiritual maturity.', 'God honors small obedience.'],
    actions: [
      'Obey God in small things',
      'Stay consistent in devotion',
      'Avoid spiritual shortcuts',
    ],
  },

  {
    text: ['God restores what is broken.', 'Nothing is beyond His healing.'],
    spiritualInsight: ['Restoration is part of God’s nature.', 'Brokenness is not the end.'],
    actions: ['Bring brokenness to God', 'Let go of past pain', 'Believe in restoration'],
  },

  {
    text: ['You are seen by God.', 'Nothing about you is hidden from Him.'],
    spiritualInsight: ['God sees what people overlook.', 'Your value is not human-defined.'],
    actions: ['Reject self-doubt', 'Remember your identity in God', 'Walk confidently in Him'],
  },

  {
    text: ['God leads those who are willing.', 'Obedience unlocks direction.'],
    spiritualInsight: ['Clarity often follows obedience.', 'God reveals step by step.'],
    actions: ['Obey what you already know', 'Pray for direction', 'Take one step forward'],
  },

  {
    text: ['God is shaping your character.', 'Your growth is intentional.'],
    spiritualInsight: ['Trials refine not punish.', 'God is building endurance in you.'],
    actions: ['Respond with patience', 'Learn from challenges', 'Stay humble in growth'],
  },
];

export function getReflection(seed?: number) {
  const index = (seed ?? new Date().getDate()) % reflections.length;

  return reflections[index];
}
