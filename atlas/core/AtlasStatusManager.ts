export type AtlasStatus = {
  status: string;
  mission: string;
  energy: number;
};

export class AtlasStatusManager {
  private state: AtlasStatus = {
    status: "🟢 Online",
    mission: "🎮 Aguardando um jogador",
    energy: 100,
  };

  getStatus() {
    return this.state;
  }

  updateStatus(data: Partial<AtlasStatus>) {
    this.state = {
      ...this.state,
      ...data,
    };
  }

  reset() {
    this.state = {
      status: "🟢 Online",
      mission: "🎮 Aguardando um jogador",
      energy: 100,
    };
  }
}