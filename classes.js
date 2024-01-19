// ������� ����� �����
class Hero {
    // ����������� �������� ������
    constructor(name, level, healthPoints, stats) {
        this.name = name; // ���
        this.level = level; // �������
        this.healthPoints = healthPoints; // ��������� ����
        this.stats = stats; // ���������
    }

    // �����, ���������� �� ����� ���������� � ����� � �������
    displayHero() {
        const heroInfo =
            `���: ${this.name}` +
            `\n�������: ${this.level}` +
            `\n��������� ����: ${this.healthPoints}` +
            `\n����: ${this.stats.str}` +
            `\n���������: ${this.stats.int}` +
            `\n��������: ${this.stats.agi}`;

        console.log(heroInfo);
    }
}

// �������� ����� �����-����
class Mage extends Hero {
    // ����������� ��������� ������
    constructor(name, level, healthPoints, stats, hasTectonicPotion, mana) {
        super(name, level, healthPoints, stats);
        this.hasTectonicPotion = hasTectonicPotion; // ����� ��� ���������
        this.mana = mana; // ���� ����
    }

    // �����, ����������� ����� �������� ������
    displayHero() {
        super.displayHero();

        console.log(`����: ${this.mana}`);

        if (this.hasTectonicPotion === "true") {
            console.log("���� ����� ��� ���������");
        }
    }
}

// �������� ����� �����-������
class Knight extends Hero {
    // ����������� ��������� ������
    constructor(name, level, healthPoints, stats, isHorseTango, energy) {
        super(name, level, healthPoints, stats);
        this.isHorseTango = isHorseTango; // ����� ��������� ����� �� ����

        // ���������� ���������� �����,
        // ��� 1 - ����� �� �����, gameParameters.MAX_STAT - ����� ����� � �� ����� �������� �������
        this.energy = energy;
    }

    // �����, ����������� ����� �������� ������
    displayHero() {
        super.displayHero();

        console.log(`�������: ${this.energy}`);

        if (this.isHorseTango === "true") {
            console.log("���� ����� ����� ��������� ����� �� ����");
        }
    }
}
