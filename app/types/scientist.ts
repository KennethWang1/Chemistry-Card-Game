export interface Scientist {
  id: string;
  name: string;
  imageUrl: string;
  birthYear: string;
  deathYear: string;
  discipline: string;
  biography: string;
  famousFor: string;
  majorContribution: string;
  firstPublication: string;
  famousPublish: string;
}

export interface CollectedCard {
  scientistId: string;
  count: number;
  unlockedAt: Date;
}
